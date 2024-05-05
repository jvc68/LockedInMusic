//when user clicks, it will execute loadMorePosts function
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.querySelector(".load-more-btn");

    loadMoreButton.addEventListener("click", loadMorePosts);
});

const posts = [
    //dummy data
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/Placeholder.png">duackie</h3>
        <img id="AArt" src="img/post2.jpeg">
        <p id="CommentSection">#i<3chipotle: This go crazy
            <br>
            #catsarecool: Kinda overrated
            <br>
            #johnGarret: classic
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post3.jpeg">Meowsicles</h3>
        <img id="AArt" src="img/post3.jpeg">
        <p id="CommentSection">#tameImpalaFan: This is my favorite album fr fr
            <br>
            #ncuhsxuzyc: is this album good chat?
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post4.jpeg">catpersoned</h3>
        <img id="AArt" src="img/post4.jpeg">
        <p id="CommentSection">#frank: this is his best album
            <br>
            #earlSweaty: eh
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post5.jpeg">duepie</h3>
        <img id="AArt" src="img/post5.jpeg">
        <p id="CommentSection">#musiclova: this isn't even music?? can someone ban this guy?!
            <br>
            #savetheturtles: good song bro
            <br>
            #DondaLover: bruh 
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post6.jpeg">smudgy123</h3>
        <img id="AArt" src="img/post6.jpeg">
        <p id="CommentSection">#User54: Bro lost the beef sorry
            <br>
            #XxxLittleGuy: yea probably delete this one too dude...
            <br>
            #DondaLover: Ain't Kanye still!
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post7.jpeg">saulGoodGuy</h3>
        <img id="AArt" src="img/post7.jpeg">
        <p id="CommentSection">#dogDolphins123: What is your guys' favorite song?
            <br>
            #XxxSongM4ker: It's gotta be nights
            <br>
            #fakeAccount: me too ^
        </p>
    </div>`,
        `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post8.jpeg">walter white</h3>
        <img id="AArt" src="img/post8.jpeg">
        <p id="CommentSection">#Barksicles: i want to be just like them
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post9.jpeg">nedialol</h3>
        <img id="AArt" src="img/post9.jpeg">
        <p id="CommentSection">#chuckythedoll: this go brrr
            <br>
            #cactusjack: thanks for the support nedialol!
        </p>
    </div>`,
    `<div class="postContainer">
        <h3 id="username"><img id="pfp" src="img/post10.jpeg">preachLove</h3>
        <img id="AArt" src="img/post10.jpeg">
        <p id="CommentSection">#user6969: this is the best album ever! 
            <br>
            #taylorswiftfan: This isn't taylor. Im going to block you now :/
            <br>
            #jimmyMcGill: rip to the legend
        </p>
    </div>`
];

//initialize post index
let nextPostIndex = 0;

function loadMorePosts() {
    const postContainer = document.querySelector(".postContainer");
    
    if (nextPostIndex < posts.length) {
        const newPost = posts[nextPostIndex];
        
        postContainer.insertAdjacentHTML("beforeend", newPost);
        
        //increment index
        nextPostIndex++;
    }
    
    //if there are no more posts, hide load more button
    if (nextPostIndex >= posts.length) {
        this.style.display = "none";
    }
}
