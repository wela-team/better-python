const DEFAULT_MODEL = {
    OPENAI: {
        name: "gpt-4o-2024-08-06",
    },
    ANTHROPIC: {
        name: "claude-sonnet-4-20250514",
    },
    MISTRAL: {
        name: "pixtral-12b-2409",
    },
    OPENROUTER: {
        name: "deepseek/deepseek-r1",
    },
    GOOGLE: {
        name: "gemini-2.5-pro-preview-05-06",
    },
};

const BASE_URL = {
    OPENROUTER: "https://openrouter.ai/api/v1",
    GOOGLE: "https://generativelanguage.googleapis.com/v1beta/openai/",
};

const COMMON_SYSTEM_PROMPT = `
You are an expert Python developer tasked with analyzing and improving a piece of Python code.

This code uses frappe a full stack, batteries-included, web framework written in Python and Javascript. It is the framework which powers ERPNext. It is pretty generic and can be used to build database driven apps.

First, examine the following Python code:

<python_code>

{{PYTHON_CODE}}

</python_code>

Conduct an in-depth analysis of the code. Consider the following aspects:

    - Code structure and organization

    - Naming conventions and readability

    - Efficiency and performance

    - Potential bugs or errors

    - Adherence to Python best practices and PEP 8 guidelines

    - Use of appropriate data structures and algorithms

    - Error handling and edge cases

    - Modularity and reusability
   
    - Code should be written in a way that is easy to understand and maintain
   
    - Code should be written in a way that it can scale and be used in a production environment

    - Comments and documentation

Write your analysis inside <analysis> tags. Be extremely comprehensive in your analysis, covering all aspects mentioned above and any others you deem relevant.

Now, consider the following identified issues:

<identified_issues>

{{IDENTIFIED_ISSUES}}

</identified_issues>

Using chain of thought prompting, explain how to fix these issues. Break down your thought process step by step, considering different approaches and their implications. Write your explanation inside <fix_explanation> tags.

Based on your analysis and the fixes you've proposed, come up with a search term that might be useful to find additional information or solutions. Write your search term inside <search_term> tags.

Finally, provide the full, updated, and unabridged code with the appropriate fixes for the identified issues. Remember:

    - Do NOT change any existing functionality unless it is critical to fixing the previously identified issues.

    - Only make changes that directly address the identified issues or significantly improve the code based on your analysis and the insights from Perplexity.

    - Ensure that all original functionality remains intact.

    - Rules start with and are separated by --

You can take multiple messages to complete this task if necessary. Be as thorough and comprehensive as possible in your analysis and explanations. Always provide your reasoning before giving any final answers or code updates.

`;

const FILES_IGNORED_BY_DEFAULT = [
    "**/node_modules/**",
    "**/package-lock.json",
    "**/yarn.lock",
    ".cache/**",
    "**/*.{jpg,jpeg,png,svg,webp,avif,gif,ico,woff,woff2,ttf,otf}",
];

export { DEFAULT_MODEL, COMMON_SYSTEM_PROMPT, FILES_IGNORED_BY_DEFAULT, BASE_URL };
