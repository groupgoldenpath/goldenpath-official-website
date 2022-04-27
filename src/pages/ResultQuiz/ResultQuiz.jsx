import { useParams } from "react-router-dom"

function ResultQuiz() {
    const {result} = useParams();
    console.log(result)
    return (
        <div className="resultQuiz">
            <h1>{result}</h1>
        </div>
    )
}

export { ResultQuiz }