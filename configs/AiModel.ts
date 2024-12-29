import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: 'gemini-1.5-flash',
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: 'application/json',
};

export const generateCourseByAI = model.startChat({
	generationConfig,
	history: [
		{
			role: 'user',
			parts: [
				{
					text: 'Generate A Course Tutorial on Following Detail With Field as courseName, description, Along with chapterName, about, duration: category: “Programming”, topic: “Python”, level: “Basic”, duration: “1 Hours”, numOfChapters: 5, in JSON format and using English',
				},
			],
		},
		{
			role: 'model',
			parts: [
				{
					text: '```json\n{\n  "courseName": "Introduction to Python Programming",\n  "description": "This course provides a foundational understanding of Python programming.  It covers basic syntax, data types, control flow, and fundamental programming concepts.  Ideal for beginners with little to no prior programming experience.",\n  "chapters": [\n    {\n      "chapterName": "Setting Up Your Python Environment",\n      "about": "Learn how to install Python, choose a suitable IDE or text editor, and run your first Python program. We\'ll cover different installation methods for various operating systems.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapterName": "Basic Syntax and Data Types",\n      "about": "Explore fundamental Python syntax, including variables, operators, comments, and the different data types (integers, floats, strings, booleans).",\n      "duration": "20 minutes"\n    },\n    {\n      "chapterName": "Control Flow: Conditional Statements and Loops",\n      "about": "Master conditional statements (if, elif, else) and looping constructs (for, while) to control the flow of execution in your programs.",\n      "duration": "20 minutes"\n    },\n    {\n      "chapterName": "Working with Data Structures: Lists and Dictionaries",\n      "about": "Learn how to use lists and dictionaries to efficiently store and manipulate collections of data. We\'ll cover common operations and methods for these data structures.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapterName": "Functions and Modules",\n      "about": "Understand the concept of functions and how to define and use them to modularize your code.  We\'ll also introduce the use of external modules to extend Python\'s functionality.",\n      "duration": "20 minutes"\n    }\n  ],\n  "category": "Programming",\n  "topic": "Python",\n  "level": "Basic",\n  "totalDuration": "1 hour", \n  "numOfChapters": 5\n}\n```\n',
				},
			],
		},
	],
});

// Chapters content generation
export const generateChaptersByAI = model.startChat({
	generationConfig,
	history: [
		{
			role: 'user',
			parts: [
				{
					text: 'Explain the concept in Detail on Topic: “Python”, Course Name: “Intermediate Python Programming”, Chapter: Chapter 1: Object-Oriented Programming (OOP) with array of object (in JSON Format) with fields as title, explanation on give chapter in detail, Code Example (Code field in <precode> format) if applicable and using English',
				},
			],
		},
		{
			role: 'model',
			parts: [
				{
					text: '```json\n{\n  "courseName": "Intermediate Python Programming",\n  "chapter": {\n    "chapterName": "Chapter 1: Object-Oriented Programming (OOP)",\n    "sections": [\n      {\n        "title": "Introduction to Object-Oriented Programming (OOP)",\n        "explanation": "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of \'objects\'. Each object combines data (attributes) and behavior (methods) that operate on that data. OOP promotes modularity, reusability, and maintainability of code compared to procedural programming.  Key principles include: Encapsulation, Inheritance, Polymorphism, and Abstraction.",\n        "code": ""\n      },\n      {\n        "title": "Classes and Objects",\n        "explanation": "A class is a blueprint for creating objects. It defines the attributes and methods that objects of that class will have. An object is a specific instance of a class. For example, \'Dog\' is a class, and \'my_dog\' is an object of the \'Dog\' class.",\n        "code": "<precode>class Dog:\\n    def __init__(self, name, breed):\\n        self.name = name\\n        self.breed = breed\\n\\n    def bark(self):\\n        print(\\"Woof!\\")\\n\\nmy_dog = Dog(\\"Buddy\\", \\"Golden Retriever\\")\\nmy_dog.bark()</precode>"\n      },\n      {\n        "title": "Encapsulation",\n        "explanation": "Encapsulation bundles data and the methods that operate on that data within a class, protecting data integrity and promoting security. In Python, we use naming conventions (e.g., `_private_attribute`) to suggest private attributes, although it doesn\'t strictly prevent access.",\n        "code": "<precode>class Person:\\n    def __init__(self, name, age):\\n        self._name = name  # Convention for private attribute\\n        self.age = age\\n\\n    def get_name(self):\\n        return self._name\\n\\n    def set_name(self, new_name):\\n        self._name = new_name\\n\\nperson1 = Person(\\"Alice\\", 30)\\nprint(person1.get_name())  # Access via method\\nperson1.set_name(\\"Bob\\")\\nprint(person1.get_name())</precode>"\n      },\n      {\n        "title": "Inheritance",\n        "explanation": "Inheritance allows creating new classes (child classes) based on existing classes (parent classes). The child class inherits attributes and methods from the parent class and can add or override them.",\n        "code": "<precode>class Animal:\\n    def __init__(self, name):\\n        self.name = name\\n\\n    def eat(self):\\n        print(f\\"{self.name} is eating\\")\\n\\nclass Cat(Animal):\\n    def meow(self):\\n        print(\\"Meow!\\")\\n\\nmy_cat = Cat(\\"Whiskers\\")\\nmy_cat.eat()  # Inherited from Animal\\nmy_cat.meow()</precode>"\n      },\n      {\n        "title": "Polymorphism",\n        "explanation": "Polymorphism allows using the same method name but with different behaviors depending on the object. For example, the `eat()` method in `Animal` and `Cat` might have different implementations.",\n        "code": "<precode>(code from Inheritance section)</precode>"\n      },\n      {\n        "title": "Abstraction",\n        "explanation": "Abstraction hides internal implementation details and exposes only the necessary interfaces to the user. In Python, we use Abstract Base Classes (ABCs) from the `abc` module.",\n        "code": "<precode>from abc import ABC, abstractmethod\\n\\nclass Shape(ABC):\\n    @abstractmethod\\n    def area(self):\\n        pass\\n\\nclass Circle(Shape):\\n    def __init__(self, radius):\\n        self.radius = radius\\n    def area(self):\\n        return 3.14159 * self.radius * self.radius\\n\\nmy_circle = Circle(5)\\nprint(my_circle.area())</precode>"\n      }\n    ]\n  }\n}\n```\n',
				},
			],
		},
	],
});
