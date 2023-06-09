
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-reviews-form]"),
        closeModalBtn: document.querySelector("[data-close-reviews-form]"),
        hideModal: document.querySelector("[data-hide-reviews-form]"),
        modal: document.querySelector("[data-reviews-form]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.hideModal.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
