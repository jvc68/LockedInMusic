document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector(".newsContainer");
    const loadMoreButton = document.createElement("button");
    loadMoreButton.textContent = "Load More";
    loadMoreButton.classList.add("load-more-btn");

    loadMoreButton.addEventListener("click", loadMoreArticles);

    newsContainer.appendChild(loadMoreButton);
});

//dummy data
const newsArticles = [
    `<div class="newsArticle">
        <img src="img/catartist.jpeg" alt="News Image">
        <h3>Cat Artist on the Rise?</h3>
        <p>An up and coming new artist who goes by the name of 'Cat G' is taking the internet by a cuteness storm! This is what Cat G has to say about his rising success:
        "It hasn't been easy," admitted Cat G in a recent interview. "But I've always believed in myself and my music. And if there's one thing I've learned, it's that you 
        should never let anyone dim your sparkle, especially when you have a tail as fabulous as mine." With his debut album set to drop next month, Cat G shows no signs of 
        slowing down, with fans eagerly awaiting the chance to get their paws on his latest tracks. From sold-out concerts to viral music videos, Cat G is on course to become 
        the reigning king of R&B.
        </p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/euphoria.jpeg" alt="News Image">
        <h3>Kendrick sleeps Drake in most recent track</h3>
        <p>Just last night, famous rapper Kendrick Lamar dropped a new single titled 'Euphoria' and it is a clear diss track against the rapper Drake..
        As fans eagerly await Drake's response, one thing is clear: Kendrick won.   
        </p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/richminion.jpeg" alt="News Image">
        <h3>Rich Minion Dropping on May 8th!</h3>
        <p>Highly anticipated leak from booming artist Yeat is finally becoming official. In a recent post on instagram, Yeat posted to his fans the cover of his new single
        and confirms the collaboration between Illumincation and himself. Keep your eyes peeled for May 8th!</p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/tiktokrizzparty.jpeg" alt="News Image">
        <h3>Unexpected Guest Appearance at Tik Tok Party</h3>
        <p>At the viral Tik Tok party last weekend, beloved streamer and rapper Kai Cenat shocked the world. He unexpectedly showed up and played many of his fan favorite songs,
        this will go down to be the greatest party in music history.</p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/kidcudi.jpeg" alt="News Image">
        <h3>Kid Cudi Cancels Tour after Falling on Coachella Stage</h3>
        <p>After last weeks incident at coachella, Kid Cudi has been left with a broken foot. Due to these unfortunate set of circumstances, Kid Cudi has decided to entirely cancel
        his tour this year. This is what Kid Cudi has to say about the situation: "Guys, so, I have a vorken calcaneus. Im headed to srugery now and there's gonna be a long recovery
        time. We have to cancel the tour so I can focus on getting better to be out there in shape to rage with you all. Theres just no way I can bounce back in time to give 100%.
        The injury is much more serious thaan I thought. I apologize to everyone, and wish I didn't have to do this."</p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/dogartist.jpeg" alt="News Image">
        <h3>Cat G has competition now?!?! Who is this new Dog?</h3>
        <p>Bruiser, the Pug has become an overnight sensation! His new track 'Cats Gross' has reached over 4 billion streams in just one night! Could Cat G finally be knocked down from
        the top? Will Bruiser be able to keep this hype? We will be sure to keep the community updated!</p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/mightdeletelater.jpeg" alt="News Image">
        <h3>J. Cole drops new album Might Delete Later</h3>
        <p>So far fans are adoring this record and saying this may be his best work yet. Let's not forget that music enjoyment is subjective to everyone! Go check out Kendrick!</p>
    </div>`,
    `<div class="newsArticle">
        <img src="img/ed.jpeg" alt="News Image">
        <h3>Ed Sherran claims he will not be dropping music this year.</h3>
        <p>Asked what he could say about his new music, Sheeran told the team, “That I'm working on them and they're new songs.”
        “But nothing's going to come out this year,” he says. “I'm enjoying being on tour. I released two records on tour last year and it's quite a lot being on tour
         and releasing records. So, I've made the new music and I'm just going to sit on it for a bit.”</p>
    </div>`
];

//initialize index
let nextArticleIndex = 0;

function loadMoreArticles() {
    //if there are more articles to load
    if (nextArticleIndex < newsArticles.length) {
        const newArticle = newsArticles[nextArticleIndex];

        const newsContainer = document.querySelector(".newsContainer");
        const loadMoreButton = document.querySelector(".load-more-btn");

        newsContainer.insertAdjacentHTML("beforeend", newArticle);

        //move load more to bottom
        newsContainer.appendChild(loadMoreButton);

        //increment index
        nextArticleIndex++;
    }
    //hide button if there are no more articles left 
    else 
    {
        this.style.display = "none";
    }
}
