# -*- coding: utf-8 -*-
"""Uses the OpenAI API and SERPAPI (Search Engine Results Pages API) to interact with a language model and gather information about Parkinson's disease and related drugs

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1nVYEPlrIuToP7zznxpqfHAvhccyvDtGa
"""
"API keys are imported"
api_key = "API_KEY"
import openai
openai.api_key = api_key
import os
os.environ['SERPAPI_API_KEY'] = "API_KEY"

"Agent is Initialized using the langchain library"
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.llms import OpenAI
llm = OpenAI(temperature=0, openai_api_key=api_key)
tools = load_tools(["serpapi", "llm-math"], llm=llm)
agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

"Code asks questions about Parkinson's Disease and efficacy of drugs mentioned in previous response. Code then concatendate the response a and b"
disease = "parkinson's disease"
a = agent.run("What is " + disease + "? What are the major symptoms, and what is the cause? Are there any potential treatments I can look at?")
b = agent.run("What is the efficacy of the drugs mentioned in " + a + "? What are the major side effects? What is the drug generally used for, and are there any alternative uses? What are the pros and cons of using this drug compared to others that aim to cure the same disease?")
a + b

