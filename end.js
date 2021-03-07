const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const finalScoreText = document.getElementById('finalScoreText');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = "";

if(mostRecentScore<=250){
    finalScoreText.innerText = "👉This shows that you must be too thin, weak or underweight. It may also include so many everyday Health issues like osteoporosis, anemia, malnutrition, lack of appetite and many more. You may need to put in some weight or gain some strength.";
    finalScoreText2.innerText = "👉Take an Online Consultation on the website to get help from our Dietitian to guide you along your journey to achieve perfect Health.";
}
if(mostRecentScore>250 && mostRecentScore<=500){
    finalScoreText.innerText = "👉This shows that you must be too thin, weak or underweight. It may also include so many everyday Health issues like osteoporosis, anemia, malnutrition, lack of appetite and many more. You may need to put in some weight or gain some strength.";
    finalScoreText2.innerText = "👉You should probably go for taking a Membership in a Fitness Studio or a Gym Nearby to always keep this habit on-track and lead a Healthy and Happy Life.";
}
if(mostRecentScore>500 && mostRecentScore<=750){
    finalScoreText.innerText = "👉This indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. ";
    finalScoreText2.innerText = "👉You are recommended to Book a Gym Nearby by downloading the Application and start working out as soon as possible to get back your Health. You can also go for a Personal Trainer for your Customized Diet plan and Lifestyle guidance.";
}
if(mostRecentScore>750){
    finalScoreText.innerText = "👉This shows that you must be too thin, weak or underweight. It may also include so many everyday Health issues like osteoporosis, anemia, malnutrition, lack of appetite and many more. You may need to put in some weight or gain some strength.";
    finalScoreText2.innerText = "👉You should immediately join a Gym nearby and hire a good Personal trainer and start your workout with the Customized plans. Hurry up. Your Health is everything and now achieving a great health has become much easier and accessible with Grassion Fitness.";
}


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
