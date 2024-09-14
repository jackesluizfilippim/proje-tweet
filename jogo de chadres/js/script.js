function addTweet() {
  let tweetInput = document.getElementById('tweet-input');
  let tweetContent = tweetInput.value.trim();

  if (tweetContent !== '') {
      let tweetContainer = document.createElement('div');
      tweetContainer.className = 'tweet';
      let tweetText = document.createElement('p');
      tweetText.textContent = tweetContent;
      tweetContainer.appendChild(tweetText);

      let feed = document.getElementById('feed');
      feed.insertBefore(tweetContainer, feed.firstChild);

      // Limpa o campo de input após tweetar
      tweetInput.value = '';
  } else {
      alert('Por favor, insira um conteúdo no tweet.');
  }
}
