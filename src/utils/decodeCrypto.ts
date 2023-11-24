const letters = 'abcdefghijklmnopqrstuvwxyz';

export function decodeCrypto() {
  let iterations = 0;

  const decode = document.querySelector('#decode') as HTMLElement;

  if (!decode) {
    return;
  }

  const interval = setInterval(() => {
    decode.innerText = decode.innerText
      .split('')
      .map((_, index) => {
        if (index < iterations && decode.dataset.value) {
          return decode.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (decode.dataset.value && iterations >= decode.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 20);
}
