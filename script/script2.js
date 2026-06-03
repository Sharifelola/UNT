document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("multi-step-form");
    const steps = Array.from(document.querySelectorAll(".form-step, .step-form"));
    const progressIndicators = Array.from(document.querySelectorAll(".step-indicator"));
    let currentStep = 0;

    steps.forEach(step => step.classList.add("form_step"));

    function showStep(index) {
        steps.forEach((step, stepIndex) => {
            const isActive = stepIndex === index;
            step.classList.toggle("active", isActive);
            step.style.display = isActive ? "block" : "none";
        });

        progressIndicators.forEach((indicator, indicatorIndex) => {
            indicator.classList.toggle("active", indicatorIndex <= index);
        });
    }

    function validateCurrentStep() {
        const step = steps[currentStep];
        const controls = Array.from(step.querySelectorAll("input, select, textarea"));
        let valid = true;

        controls.forEach(control => {
            if (!control.checkValidity()) {
                valid = false;
                control.reportValidity();
            }
        });

        return valid;
    }

    function goToStep(index) {
        if (index < 0 || index >= steps.length) {
            return;
        }
        currentStep = index;
        showStep(currentStep);
    }

    form.addEventListener("click", event => {
        const target = event.target;
        if (target.matches(".bouton-avant, .btn-next")) {
            event.preventDefault();
            if (!validateCurrentStep()) {
                return;
            }
            goToStep(currentStep + 1);
        }

        if (target.matches(".bouton-retour, .btn-prev")) {
            event.preventDefault();
            goToStep(currentStep - 1);
        }
    });

    showStep(currentStep);
});
