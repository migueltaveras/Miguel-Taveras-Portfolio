@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

body {
    padding:0px;
    margin:0px;
    background:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1491956175078-460aea0914ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1550&q=80") center center;
    background-size:cover;
    width:100vw;
    height:100vh;
    overflow:hidden;
    font-family: 'Josefin Sans', sans-serif;
}
#loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background:rgb(255, 50, 50);
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#spinner {
    animation: rotate 0.56s infinite linear;
    width:50px;
    height:50px;
    border:12px solid #fff;
    border-bottom:12px solid rgb(255, 50, 50);
    border-radius:50%;
    margin:0;
}
@keyframes rotate {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
#box {
    width:100vw;
    height:100vh;
    z-index:9;
    position:fixed;
    top:0;
}
#box div {
    width:16.66vw;
    height:100%;
    display:inline-block;
}
.box1 {
    background:rgb(255, 50, 50);
}
.box2 {
    background:rgb(255, 50, 50);
    margin-left:-5px;
}
#menu {
    width:100%;
    text-align:center;
    margin:6vh 0px;
    display:none;
}
#menu a {
    margin:0px 6%;
    font-size:19px;
    color:#fff;
    text-decoration:underline;
}
#middle {
    width:100vw;
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:fixed;
    top:0;
    text-align:center;
    z-index:1;
    color:#fff;
    padding-bottom:10vh;
}
#middle h1 {
    color:rgb(255, 50, 50);
    font-size:70px;
    text-decoration:underline;
}
#about {
    width:10vw;
    height:10vw;
    text-align:center;
    font-size:25px;
    transform:rotate(-90deg);
    background:transparent;
    color:#fff;
    position:fixed;
    left:0;
    bottom:40vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    z-index:4;
    transition:0.4s ease-in-out;
    border-radius:0px 0px 100px 100px;
}
#work {
    width:10vw;
    height:10vw;
    text-align:center;
    font-size:25px;
    transform:rotate(90deg);
    background:transparent;
    color:#fff;
    position:fixed;
    right:0;
    bottom:40vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    z-index:4;
    transition:0.4s ease-in-out;
    border-radius:0px 0px 100px 100px;
}
#contact {
    width:10vw;
    height:10vw;
    text-align:center;
    font-size:25px;
    background:transparent;
    color:#fff;
    position:fixed;
    bottom:0;
    left:45vw;
    display:flex;
    flex-direction: column;
    justify-content:center;
    z-index:4;
    transition:0.4s ease-in-out;
    border-radius:100px 100px 0px 0px;
}
#about:hover {
    background:rgba(255,50,50,0.9);
    cursor:pointer;
}
#work:hover {
    background:rgba(255,50,50,0.9);
    cursor:pointer;
}
#contact:hover {
    background:rgba(255,50,50,0.9);
    cursor:pointer;
}
#middle table {
    width:30%;
    margin:6vh auto;
}
#middle table tr td {
    text-align:center;
}
.social {
    color:#fff;
    font-size:22px;
    border-radius:50%;
    transition:0.4s ease-in-out;
    margin:0px 8px;
    text-align:center;
}
.social:hover { 
    cursor: pointer;
    color:rgb(255, 50, 50);
}
.container {
    width:90vw;
    height:90vh;
    padding:5vh 5vw;
    background:rgb(255, 50, 50);
    color:#fff;
    z-index:9;
    position:fixed;
    max-height:100vh;
    overflow-y:auto;
    display:none;
}
.container div {
    font-size:25px;
    margin:20px 0px;
    transition:0.4s ease-in-out;
}
.container div:hover {
    cursor:pointer;
}
.container section {
    margin:8vh 0px;
}
#used div{
    font-size:14px !important;
    display:inline-block;
    padding:8px 10px;
    border:2px solid #fff;
    margin:0px 10px;
    border-radius:50px;
}
#used:hover {
    cursor:text;
}
#used div:hover {
    cursor:text;
}
.container h1 {
    font-size:60px;
    text-decoration:underline;
}
.container p {
    font-size:21px;
}
.btn_one {
    font-size:18px;
    font-family: 'Josefin Sans', sans-serif;
    color:#fff;
    background:transparent;
    border:3px solid #fff;
    padding:8px 40px;
    border-radius:80px;
    font-weight:bold;
    margin:2vh 10px;
    transition:0.4s ease-in-out;
}
.btn_one:hover {
    cursor:pointer;
    color:rgb(255, 50, 50);
    background:#fff;
}
.btn_two {
    font-size:18px;
    font-family: 'Josefin Sans', sans-serif;
    color:rgb(255, 50, 50);
    background:#fff;
    border:3px solid #fff;
    padding:8px 40px;
    border-radius:80px;
    font-weight:bold;
    margin:2vh 10px;
    transition:0.4s ease-in-out;
}
.btn_two:hover {
    cursor:pointer;
    padding:8px 60px;
}
.container form input {
    width:46%;
    margin:20px 1%;
    background:transparent;
    border:0px;
    border-bottom:3px solid rgba(255,255,255,0.5);
    padding:8px 10px;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
    transition:0.4s ease-in-out;
    color:#fff;
    font-weight:bold;
}
.container form textarea {
    width:96%;
    margin:20px 1%;
    padding:8px 10px;
    border:0px;
    border-bottom:3px solid rgba(255,255,255,0.5);
    padding:8px 10px;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
    background:transparent;
    resize:none;
    transition:0.4s ease-in-out;
    color:#fff;
    font-weight:bold;
}
.container form input:focus {
    outline:none;
    border-bottom:3px solid rgba(255, 255, 255,1);
}
.container form textarea:focus {
    outline:none;
    border-bottom:3px solid rgba(255, 255, 255,1);
}
::placeholder {
    color:#fff;
}
#footer {
    color:#fff;
    width:92vw;
    padding:5vh 4vw;
    text-align:right;
    position:fixed;
    z-index:1;
    bottom:0;
    font-size:16px;
    font-weight:bold;
}
#footer a {
    color:rgb(255, 50, 50) ;
}
#particles-js {
    position:fixed;
    width:100vw;
    height:100vh;
}
::-webkit-scrollbar {
    width:5px;
    height:5px;
}
::-webkit-scrollbar-track {
    background: #fff; 
}
::-webkit-scrollbar-thumb {
    background: rgb(255, 50, 50); 
}
::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 50, 50,0.8); 
}
::selection {
	color: #fff;
	background: rgb(255, 50, 50);
}

@media (max-width: 800px){ 
    #about {
        display:none;
    }
    #contact {
        display:none;
    }
    #work {
        display:none;
    }
    #footer {
        text-align:center;
    }
    #middle {
        width:90vw;
        padding:0px 5vw;
    }
    #middle table {
        width:80%;
    }
    .container form input {
        width:90%;
    }
    .container form textarea {
        width:90%;
    }
    #menu {
        display:inline-block;
    }
    #onlywide {
        display:none !important;
    }
    .box2 {
        margin-left:0px !important;
    }
    #box div {
        width:100%;
    }
}