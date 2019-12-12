// DOM MANIPULATION Visual Novel Game

// Create a new event
// Select the button you want to edit
// Run a function when it is clicked

var audio = new Audio("music/rise.m4a");
var audio2 = new Audio("music/forest.mp3")

document.querySelector(".button1").addEventListener("click", function(){
    audio2.play();
    document.querySelector(".story-window").innerHTML = '<p>It is the night, you are walking alone on the street. It is really cold, suddenly, the rain begins. You do not have an umbrella. While you want to go to the other street with the canopy, you see there is one man lay on the street in front of you. What will you do?</p><img src="http://v3wall.com/wallpaper/1920_1080/1004/1920_1080_20100419011442566596.jpg" style="height:300px; length:350px;">';
    // 2. Erase old button     add dot                     no dot
    document.querySelector(".button1").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".choice1-btn").classList.remove("invisible");
    document.querySelector(".choice2-btn").classList.remove("invisible");
} )
document.querySelector(".choice1-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>You: Are you ok?</p><img src="http://img5.mtime.cn/mg/2016/10/08/101829.84134071_310X0X4.jpg">';
    document.querySelector(".choice1-btn").classList.add("invisible");
    document.querySelector(".choice2-btn").classList.add("invisible");
    document.querySelector(".choice3-btn").classList.remove("invisible");
} )


document.querySelector(".choice3-btn").addEventListener("click", function(){
  document.querySelector(".story-window").innerHTML = '<p>However, the man uses the knife and stab at you.</p><img src="https://puui.qpic.cn/qqvideo_ori/0/x0649swb6be_496_280/0"style="height:300px; length:350px;">';
  document.querySelector(".choice3-btn").classList.add("invisible");
  document.querySelector(".choice4-btn").classList.remove("invisible");
} )
document.querySelector(".choice4-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>Man: Don’t talk to me. Go away now, it is very dangerous to stay outside alone now.</p><img src="https://i.ytimg.com/vi/fdf-rBCn3oA/maxresdefault.jpg"style="height:300px; length:350px;">';
    document.querySelector(".choice4-btn").classList.add("invisible");
    document.querySelector(".choice3a-btn").classList.remove("invisible");
} )
document.querySelector(".choice3a-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>You: But I am not alone. You are by my side.</p><img src="https://vthumb.ykimg.com/054101015D1498598B6C0695F9800B66"style="height:300px; length:350px;">';
    document.querySelector(".choice3a-btn").classList.add("invisible");
    document.querySelector(".choice3b-btn").classList.remove("invisible");
} )
document.querySelector(".choice3b-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>Man: I am not the one can be with you. Just go home, lock the door and close the window.</p><img src="https://i.pinimg.com/originals/1c/3c/a2/1c3ca23f218884718cb8ab14598a1d67.jpg"style="height:300px; length:350px;">';
    document.querySelector(".choice3b-btn").classList.add("invisible");
    document.querySelector(".choice5-btn").classList.remove("invisible");
    document.querySelector(".choice6-btn").classList.remove("invisible");
} )
document.querySelector(".choice5-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>However, you tear unconsciously. </p><img src="https://2img.hitv.com/preview/sp_images/2016/dianying/290237/3271991/20160611131006028.jpg"style="height:300px; length:350px;">';
    document.querySelector(".choice5-btn").classList.add("invisible");
    document.querySelector(".choice6-btn").classList.add("invisible");
    document.querySelector(".choice7-btn").classList.remove("invisible");
} )
document.querySelector(".choice6-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>However, the man pushes you hard to the other street. </p><img src="images/pic.jpg" style="height:300px; length:350px;">';
    document.querySelector(".choice5-btn").classList.add("invisible");
    document.querySelector(".choice6-btn").classList.add("invisible");
    document.querySelector(".choice7-btn").classList.remove("invisible");
} )
document.querySelector(".choice7-btn").addEventListener("click", function(){
  audio2.pause();
  audio.play();
    document.querySelector(".story-window").innerHTML = '<p>Suddenly, the time stop, everything in the world stop. The music begins, with a strong voice. You turn around to the man, and you remember who he is. </p><img src="http://p1.pstatp.com/large/efe00035fcf05e82b5c"style="height:300px; length:350px;">';
    document.querySelector(".choice7-btn").classList.add("invisible");
    document.querySelector(".choice8-btn").classList.remove("invisible");
} )
document.querySelector(".choice8-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>You have many memories come up in your mind.</p><img src="http://i2.hdslb.com/bfs/archive/3f17cdb715b5fb951e3da62f82f44b9dd5ef01b3.jpg" style="height:300px; length:350px;">';
    document.querySelector(".choice8-btn").classList.add("invisible");
    document.querySelector(".choice9-btn").classList.remove("invisible");
} )
document.querySelector(".choice9-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>You remember who is the man, however, he is gone.</p><img src="https://images5.alphacoders.com/534/534917.jpg"style="height:300px; length:350px;">';
    document.querySelector(".choice9-btn").classList.add("invisible");
    document.querySelector(".choice10-btn").classList.remove("invisible");
})
document.querySelector(".choice10-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>You wake up on your bed. It just a dream.</p> <img src="images/dream.jpg"style="height:300pxl length:350px;">';
    document.querySelector(".choice10-btn").classList.add("invisible");
    document.querySelector(".choice11-btn").classList.remove("invisible");
})
document.querySelector(".choice11-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>THE STORY END</p><img src="images/end.jpg"style="height:300px; length:350px;">';
    document.querySelector(".choice11-btn").classList.add("invisible");
    document.querySelector(".choice12-btn").classList.remove("invisible");
} )
document.querySelector(".choice12-btn").addEventListener("click", function(){
  audio.pause();
    document.querySelector(".story-window").innerHTML = '<p></p>';
    document.querySelector(".choice12-btn").classList.add("invisible");
    document.querySelector(".button1").classList.remove("invisible");
})
document.querySelector(".choice2-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>However, when you try to cross the street, the man holds your leg.</p><img src="https://p1.meituan.net/movie/bbace0f105778b0fdffb927487f54809353993.jpg@750w_1l"style="height:300px; length:350px;">';
    document.querySelector(".choice1-btn").classList.add("invisible");
    document.querySelector(".choice2-btn").classList.add("invisible");
    document.querySelector(".choice13-btn").classList.remove("invisible");
} )
document.querySelector(".choice13-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p> Man: Girl, go home now, it is too dangerous to stay outside. </p><img src="http://puui.qpic.cn/qqvideo_ori/0/e086156nhi4_496_280/0"style="height:300px; length:350px;">';
    document.querySelector(".choice13-btn").classList.add("invisible");
    document.querySelector(".choice14-btn").classList.remove("invisible");
} )
document.querySelector(".choice14-btn").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<p>You: Why? I do not think it is a danger. </p><img src="http://img5.mtime.cn/mg/2016/10/08/101829.84134071_310X0X4.jpg"style="height:300px; length:350px;">';
    document.querySelector(".choice14-btn").classList.add("invisible");
    document.querySelector(".choice4-btn").classList.remove("invisible");
} )
