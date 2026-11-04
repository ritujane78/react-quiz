function FinishScreen({ points, maxPossiblePoints, dispatch, highScore }) {
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if (percentage === 100) emoji = "🥳"
    else if (percentage >= 80) emoji = "😎"
    else if (percentage >= 60) emoji = "🙂"
    else if (percentage >= 40) emoji = "😐"
    else if (percentage >= 20) emoji = "😕"
    else emoji = "😢"
  return (
    <>
        <p className='result'><span>{emoji}</span>You scored <strong> {points} </strong> out of <strong> {maxPossiblePoints} </strong>
    ({Math.ceil(percentage)}%) 
    </p>

    <p className='highscore'>Highscore : {highScore} points </p>
    <button className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>Restart Quiz</button>
    </>
  )
}

export default FinishScreen
