# English Vocabulary Quiz API

Node.js and Express backend for generating English word association quizzes without external APIs.

## Features

- Predefined vocabulary dataset grouped by category.
- Difficulty levels from 1 to 5.
- Random category when no category is provided.
- Random question selection and shuffled answer options.
- Answer scoring with feedback and explanations.

## Categories

- `food`
- `travel`
- `hotel`
- `daily-life`
- `business`
- `emotions`

## Difficulty

- `1`: basic words, A1
- `2` to `3`: intermediate, A2-B1
- `4` to `5`: advanced, B2-C1

## Setup

```bash
npm install
npm start
```

The API runs on `http://localhost:3000` by default. Set `PORT` to use another port.

## Endpoints

### GET `/quiz`

Query params:

- `level`: required, integer from `1` to `5`
- `category`: optional category slug

Example:

```bash
curl "http://localhost:3000/quiz?level=2&category=food"
```

Response:

```json
{
  "words": ["bar", "drink", "alcohol"],
  "options": ["beer", "cat"],
  "correct": "beer",
  "explanation": "Beer is an alcoholic drink commonly served in a bar.",
  "category": "food",
  "level": 2,
  "cefr": "A2-B1"
}
```

### POST `/answer`

Body:

```json
{
  "answer": "beer",
  "correct": "beer"
}
```

Example:

```bash
curl -X POST "http://localhost:3000/answer" \
  -H "Content-Type: application/json" \
  -d "{\"answer\":\"beer\",\"correct\":\"beer\"}"
```

Response:

```json
{
  "isCorrect": true,
  "feedback": "Correct! 'beer' is related to bar, alcohol, drink.",
  "explanation": "Beer is an alcoholic drink commonly served in a bar."
}
```

### GET `/categories`

Returns available category slugs.

### GET `/health`

Simple health check.
