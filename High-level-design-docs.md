# High Level Design Docs : NVOC

## 1. Executive Summary

### 1.1 Project Overview

To create an interactive quiz application which offers the following views:

1. Design view : Where user can create the questions.
2. Test view : Where user can test the questions themselves.

### 1.2 Scope

* **In Scope:** Quiz Designer view, Test view, Scoring

## 2. Architecture

### 2.1 Directory Structure

```text
├── index.html            # Main entry point
├── README.md             # Project Documentation
├── style.css             # Styles
├── main.js               # Glues the other modules
├── quizBuilder.js        # Quiz Setup
├── quizEngine.js
└── quizPresenter.js
