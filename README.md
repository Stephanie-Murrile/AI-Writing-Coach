## AI Writing Coach

A simple AI-powered writing tool that helps users improve their essays by providing structured feedback, suggestions, and answers about their writing.

Test it here: https://stephanie-murrile.github.io/AI-Writing-Coach/

## What it does

- Lets users write an essay in a clean editor (left side)
- Provides AI feedback and suggestions (right side)
- Answers questions about the essay
- Helps improve clarity, grammar, structure, and argument strength

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub
- Supabase Edge Functions 
- Groq API

## How it works

### User flow

- User writes an essay in the editor
- User asks questions about their writing
- Frontend sends:
  - essay text
  - question
  to a Supabase Edge Function
- Edge Function sends request to Groq API
- AI returns structured writing feedback
- Response is shown in the side panel

## Features

- Clean split-screen writing interface
- AI writing coach on demand
- Structured feedback format (Answer / Issue / Suggestion)
- Fast responses using Groq LLMs
- Fully browser-based (no login required)

## Project Structure

### Frontend
- index.html

### Backend
- supabase/functions/chat/index.ts

### Hosting
- GitHub

## Live Demo

https://stephanie-murrile.github.io/ai-chatbot/

## Notes

- Built for experimentation with AI-assisted writing
