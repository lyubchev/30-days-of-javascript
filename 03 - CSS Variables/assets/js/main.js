const controls = document.querySelectorAll('.controls input');

function handleChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

controls.forEach(input => {
  input.addEventListener('change', handleChange);
  input.addEventListener('mousemove', handleChange);
});
