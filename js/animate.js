document.addEventListener("DOMContentLoaded", function() {
    const api_url = 'https://api.api-ninjas.com/v1/quotes?X-Api-Key=zU8xuMjkrhTITeuEXaw6kQ==PeOfoueKjTwFpQ0I';
    async function fetchQuote(api_url) {
        try {
            response = await fetch(api_url);
            data = await response.json();
            console.log(data)
            const quote = data[0]['quote'];
            const author = data[0]['author'];
            console.log(quote)
            console.log(author)
            const anchor = document.getElementById('about-me');
            let quoteBlock = document.createElement('div');
            quoteBlock.className = 'daily-quote'
            quoteBlock.innerHTML = `<br><q>${quote}</q><br>
            <p">- ${author}</p><br>`;
            anchor.prepend(quoteBlock);
            } catch (error) {
            console.log(error);
        }
    }

    function moveSlide() {
        let count = 0;

        return function(){
            count++;
            if (count >= 7) {
                count = 1;
            }
            return count - 1;
        }
    }
    let slide = moveSlide()

    function makeSlideShow() {
        currentSlide = slide();
        const slideView = document.getElementById('selfie')
        slideView.setAttribute('src', `slide${currentSlide}.jpg`)
    }

    // fetchQuote(api_url);
    slideShow = setInterval(makeSlideShow, 10000);
});