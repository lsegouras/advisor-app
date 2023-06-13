btn = document.querySelector(".advice-update")

btn.addEventListener('click', createRandomAdvice)

async function generateRandomAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json()
    }

async function createRandomAdvice(){
    const advice = await generateRandomAdvice()
    const adviceId = `#${advice.slip.id}`
    const adviceText = `#${advice.slip.advice}`
    document.querySelector(".advice-id").innerHTML = adviceId
    document.querySelector(".advice-description").innerHTML = adviceText
     }
createRandomAdvice()


    