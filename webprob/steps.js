// Sistema de Pasos para el Anunciante
class StepsManager {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.formData = {};
        this.init();
    }

    init() {
        this.bindEvents();
        this.showStep(1);
    }

    bindEvents() {
        // Event listeners para los pasos
        document.addEventListener('DOMContentLoaded', () => {
            console.log('StepsManager: Configurando eventos');
            this.setupStepNavigation();
            this.setupFormValidation();
        });
    }

    setupStepNavigation() {
        console.log('StepsManager: Configurando navegación de pasos');
        
        // Navegación por clic en los pasos
        const stepItems = document.querySelectorAll('.step-item');
        console.log('StepsManager: Encontrados', stepItems.length, 'elementos de paso');
        
        stepItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const stepNumber = index + 1;
                console.log('StepsManager: Clic en paso', stepNumber);
                if (this.canNavigateToStep(stepNumber)) {
                    this.showStep(stepNumber);
                }
            });
        });

        // Botones de navegación
        const nextButtons = document.querySelectorAll('.btn-next');
        const prevButtons = document.querySelectorAll('.btn-prev');
        
        console.log('StepsManager: Encontrados', nextButtons.length, 'botones next');
        console.log('StepsManager: Encontrados', prevButtons.length, 'botones prev');

        nextButtons.forEach(btn => {
            btn.addEventListener('click', () => this.nextStep());
        });

        prevButtons.forEach(btn => {
            btn.addEventListener('click', () => this.prevStep());
        });
    }

    setupFormValidation() {
        // Validación en tiempo real
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.validateCurrentStep();
            });
        });
    }

    canNavigateToStep(stepNumber) {
        // Solo permitir navegación a pasos completados o el actual
        return stepNumber <= this.currentStep;
    }

    showStep(stepNumber) {
        // Ocultar todos los contenidos de pasos
        const stepContents = document.querySelectorAll('.step-content');
        stepContents.forEach(content => {
            content.classList.remove('active');
        });

        // Mostrar el contenido del paso actual
        const currentContent = document.getElementById(`step-${stepNumber}-content`);
        if (currentContent) {
            currentContent.classList.add('active');
        }

        // Actualizar indicadores de pasos
        this.updateStepIndicators(stepNumber);

        this.currentStep = stepNumber;
    }

    updateStepIndicators(activeStep) {
        const stepItems = document.querySelectorAll('.step-item');
        
        stepItems.forEach((item, index) => {
            const stepNumber = index + 1;
            
            // Remover todas las clases
            item.classList.remove('active', 'completed', 'inactive');
            
            if (stepNumber === activeStep) {
                item.classList.add('active');
            } else if (stepNumber < activeStep) {
                item.classList.add('completed');
            } else {
                item.classList.add('inactive');
            }
        });
    }

    nextStep() {
        if (this.validateCurrentStep() && this.currentStep < this.totalSteps) {
            this.saveCurrentStepData();
            this.showStep(this.currentStep + 1);
            
            // Si vamos al paso 5, actualizar la vista previa
            if (this.currentStep === 5) {
                this.updatePreview();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.showStep(this.currentStep - 1);
        }
    }

    validateCurrentStep() {
        const currentContent = document.getElementById(`step-${this.currentStep}-content`);
        if (!currentContent) return true;

        const requiredInputs = currentContent.querySelectorAll('.form-input[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                this.showValidationError(input, 'Este campo es requerido');
                isValid = false;
            } else {
                this.clearValidationError(input);
            }
        });

        // Validaciones específicas por paso
        switch (this.currentStep) {
            case 1: // QR
                isValid = this.validateQR();
                break;
            case 2: // Información
                isValid = this.validateBusinessInfo();
                break;
            case 3: // Contacto
                isValid = this.validateContactInfo();
                break;
            case 4: // Imágenes
                isValid = this.validateImages();
                break;
        }

        return isValid;
    }

    validateQR() {
        const qrInput = document.getElementById('qr-code');
        const qrValue = qrInput.value.trim();
        
        if (!qrValue) {
            this.showValidationError(qrInput, 'Ingresa un código QR');
            return false;
        }
        
        if (!qrValue.startsWith('QR_') && qrValue.length < 8) {
            this.showValidationError(qrInput, 'Código QR inválido');
            return false;
        }

        this.showValidationSuccess(qrInput, '✅ Código QR válido');
        return true;
    }

    validateBusinessInfo() {
        const nameInput = document.getElementById('business-name');
        const categoryInput = document.getElementById('business-category');
        const descriptionInput = document.getElementById('business-description');

        let isValid = true;

        if (!nameInput.value.trim()) {
            this.showValidationError(nameInput, 'Nombre requerido');
            isValid = false;
        }

        if (!categoryInput.value || categoryInput.value === 'Selecciona una categoría') {
            this.showValidationError(categoryInput, 'Selecciona una categoría');
            isValid = false;
        }

        if (!descriptionInput.value.trim()) {
            this.showValidationError(descriptionInput, 'Descripción requerida');
            isValid = false;
        }

        return isValid;
    }

    validateContactInfo() {
        const addressInput = document.getElementById('business-address');
        const phoneInput = document.getElementById('business-phone');
        const emailInput = document.getElementById('business-email');

        let isValid = true;

        if (!addressInput.value.trim()) {
            this.showValidationError(addressInput, 'Dirección requerida');
            isValid = false;
        }

        if (!phoneInput.value.trim()) {
            this.showValidationError(phoneInput, 'Teléfono requerido');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            this.showValidationError(emailInput, 'Email requerido');
            isValid = false;
        } else if (!this.isValidEmail(emailInput.value)) {
            this.showValidationError(emailInput, 'Email inválido');
            isValid = false;
        }

        return isValid;
    }

    validateImages() {
        const imagesInput = document.getElementById('business-images');
        const imagesValue = imagesInput.value.trim();
        
        if (!imagesValue) {
            this.showValidationError(imagesInput, 'Al menos una imagen es requerida');
            return false;
        }

        if (!this.isValidUrl(imagesValue)) {
            this.showValidationError(imagesInput, 'URL de imagen inválida');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    showValidationError(input, message) {
        this.clearValidationError(input);
        input.style.borderColor = '#dc3545';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-message validation-error';
        errorDiv.textContent = message;
        errorDiv.id = `error-${input.id}`;
        
        input.parentNode.appendChild(errorDiv);
    }

    showValidationSuccess(input, message) {
        this.clearValidationError(input);
        input.style.borderColor = '#28a745';
        
        const successDiv = document.createElement('div');
        successDiv.className = 'validation-message validation-success';
        successDiv.textContent = message;
        successDiv.id = `success-${input.id}`;
        
        input.parentNode.appendChild(successDiv);
    }

    clearValidationError(input) {
        input.style.borderColor = '#FFD700';
        
        const errorDiv = input.parentNode.querySelector(`#error-${input.id}`);
        const successDiv = input.parentNode.querySelector(`#success-${input.id}`);
        
        if (errorDiv) errorDiv.remove();
        if (successDiv) successDiv.remove();
    }

    saveCurrentStepData() {
        const currentContent = document.getElementById(`step-${this.currentStep}-content`);
        if (!currentContent) return;

        const inputs = currentContent.querySelectorAll('.form-input');
        inputs.forEach(input => {
            this.formData[input.id] = input.value;
        });
    }

    getFormData() {
        return this.formData;
    }

    updatePreview() {
        const data = this.getFormData();
        
        // Actualizar los elementos de vista previa
        const previewName = document.getElementById('preview-name');
        const previewCategory = document.getElementById('preview-category');
        const previewDescription = document.getElementById('preview-description');
        const previewAddress = document.getElementById('preview-address');
        const previewPhone = document.getElementById('preview-phone');
        const previewEmail = document.getElementById('preview-email');
        
        if (previewName) previewName.textContent = data['business-name'] || '-';
        if (previewCategory) previewCategory.textContent = data['business-category'] || '-';
        if (previewDescription) previewDescription.textContent = data['business-description'] || '-';
        if (previewAddress) previewAddress.textContent = data['business-address'] || '-';
        if (previewPhone) previewPhone.textContent = data['business-phone'] || '-';
        if (previewEmail) previewEmail.textContent = data['business-email'] || '-';
    }

    publishAd() {
        if (this.validateCurrentStep()) {
            this.saveCurrentStepData();
            
            const data = this.getFormData();
            // Intentar agregar a la lista del cliente si la función existe en la página actual
            try {
                if (typeof window.addBusinessToList === 'function') {
                    // Mapear categorías (por si difieren entre vistas)
                    const categoryMapping = {
                        'moda': 'boutiques',
                        'artesania': 'carpinteria',
                        'gastronomia': 'comida',
                        'servicios': 'servicios',
                        'salud': 'salud',
                        'educacion': 'educacion',
                        'tecnologia': 'tecnologia',
                        'turismo': 'servicios',
                        'belleza': 'belleza',
                        'inmobiliaria': 'servicios'
                    };

                    const mappedCategory = categoryMapping[data['business-category']] || data['business-category'] || 'servicios';

                    window.addBusinessToList(
                        data['business-name'] || 'Mi Negocio',
                        mappedCategory,
                        data['business-description'] || 'Descripción del negocio',
                        data['business-address'] || 'Dirección no especificada',
                        data['business-phone'] || '+593 99 000 0000',
                        data['business-email'] || 'contacto@negocio.com'
                    );
                }
            } catch (e) {
                console.warn('No se pudo agregar a la lista de cliente desde StepsManager:', e);
            }

            // Reset inmediato a Paso 1 (misma página) y luego mostrar modal de éxito
            this.resetForm();
            this.showStep(1);
            this.updateStepIndicators(1);
            try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch {}

            // Modal de éxito informativo
            const successModal = document.createElement('div');
            successModal.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 3000; display: flex; align-items: center; justify-content: center;';
            successModal.innerHTML = `
                <div style="background: #fff; border-radius: 16px; padding: 20px; max-width: 420px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.2);">
                    <div style="font-size: 48px; margin-bottom: 10px;">🚀</div>
                    <h3 style="color: #111; margin-bottom: 8px;">¡Anuncio publicado con éxito!</h3>
                    <p style="color: #555; margin-bottom: 16px;">${data['business-name'] || 'Tu anuncio'} ya está visible para los clientes.</p>
                    <button id="success-ok-btn" style="padding: 10px 16px; border: none; border-radius: 10px; background: #FFD700; color: #111; font-weight: 700; cursor: pointer;">OK</button>
                </div>`;
            document.body.appendChild(successModal);

            const closeAndReset = () => {
                successModal.remove();
                const qrInput = document.getElementById('qr-code');
                if (qrInput) qrInput.focus();
            };
            document.getElementById('success-ok-btn').addEventListener('click', closeAndReset);
            // Sin cierre automático: se espera al clic en OK
        }
    }

    resetForm() {
        this.currentStep = 1;
        this.formData = {};
        
        // Limpiar todos los inputs (incluye checkboxes y selects) dentro de la vista de anunciante
        const container = document.getElementById('advertiserView') || document;
        const textInputs = container.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="url"], textarea');
        textInputs.forEach(input => {
            input.value = '';
            this.clearValidationError(input);
        });
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => { cb.checked = false; });
        const selects = container.querySelectorAll('select');
        selects.forEach(sel => { sel.value = ''; });
        
        // Eliminar mensajes de validación si quedaran
        container.querySelectorAll('.validation-message').forEach(el => el.remove());

        // Volver al primer paso
        this.showStep(1);
        // Actualizar indicadores al estado inicial
        this.updateStepIndicators(1);
    }
}

// Inicializar el sistema de pasos
document.addEventListener('DOMContentLoaded', () => {
    window.stepsManager = new StepsManager();
});

// Funciones globales para compatibilidad
function nextStep() {
    if (window.stepsManager) {
        window.stepsManager.nextStep();
    }
}

function prevStep() {
    if (window.stepsManager) {
        window.stepsManager.prevStep();
    }
}

function publishAd() {
    if (window.stepsManager) {
        window.stepsManager.publishAd();
    }
}

function validateQR() {
    if (window.stepsManager) {
        return window.stepsManager.validateQR();
    }
    return false;
}
