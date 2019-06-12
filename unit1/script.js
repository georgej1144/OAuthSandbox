Survey
    .StylesManager
    .applyTheme("bootstrap");

var myCss = {
    root: "sv_main sv_bootstrap_css",
    navigationButton: "button btn-large",
    question: {
		"mainRoot": "sv_qstn",
        "flowRoot": "sv_q_flow sv_qstn",
		"titleLeftRoot": "sv_qstn_left",
		"title": "",
		"number": "sv_q_num",
		"description": "small",
		"comment": "form-control",
		"required": "",
		"titleRequired": ""
    }
};




var json = {
 "title": "Unit 1",
 "completedHtml": "<h3>Nice work! Now move on to the next unit. </h3>",
 "pages": [
  {
   "name": "Question 1.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1.1",
     "title": "How many protons are there in oxygen?",
     "valueName": "question1 1",
     "choices": [
      {
       "value": "item1",
       "text": "8"
      },
      {
       "value": "item2",
       "text": "16"
      },
      {
       "value": "item3",
       "text": "48"
      },
      {
       "value": "item4",
       "text": "4"
      }
     ],
     "otherText": "4"
    }
   ],
   "title": "Question 1.1",
   "questionsOrder": "random"
  },
  {
   "name": "Question 1.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML1",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question1.2",
     "title": "What is the atomic number of oxygen?",
     "valueName": "question1 2",
     "choices": [
      {
       "value": "item1",
       "text": "8"
      },
      {
       "value": "item2",
       "text": "15.999"
      },
      {
       "value": "item3",
       "text": "6"
      },
      {
       "value": "item4",
       "text": "10"
      }
     ]
    },
    {
     "type": "html",
     "name": "video1",
     "visibleIf": "{question1 2} = \"item2\" or {question1 2} = \"item3\" or {question1 2} = \"item4\"",
     "html": "<h5>Watch this video to understand the concept of this question.</h5>\n<div style=\"text-align: center;\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/_S7ov25y3_M\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
    }
   ],
   "visibleIf": "{question1 1} <> \"item1\"",
   "title": "Question 1.2"
  },
  {
   "name": "Question 1.5",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1.5",
     "title": "How many protons are there in thulium?",
     "valueName": "question1 5",
     "choices": [
      {
       "value": "item1",
       "text": "69"
      },
      {
       "value": "item2",
       "text": "169"
      },
      {
       "value": "item3",
       "text": "90"
      },
      {
       "value": "item4",
       "text": "16"
      }
     ]
    }
   ],
   "visibleIf": "{question1 4} = \"item1\"",
   "title": "Question 1.5"
  },
  {
   "name": "Question 1.6",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1.6",
     "title": "What is the atomic number of thulium?",
     "valueName": "question1 6",
     "choices": [
      {
       "value": "item1",
       "text": "69"
      },
      {
       "value": "item2",
       "text": "169"
      },
      {
       "value": "item3",
       "text": "168.934"
      },
      {
       "value": "item4",
       "text": "16"
      }
     ]
    }
   ],
   "visibleIf": "{question1 5} = \"item1\"",
   "title": "Question 1.6"
  },
  {
   "name": "Question 2.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2.1",
     "title": "Which element has 92 protons?",
     "valueName": "question2 1",
     "choices": [
      {
       "value": "item1",
       "text": "U"
      },
      {
       "value": "item2",
       "text": "Nb"
      },
      {
       "value": "item3",
       "text": "Nd"
      },
      {
       "value": "item4",
       "text": "Ir"
      }
     ]
    }
   ],
   "visibleIf": "{question1 1} = \"item1\" or {question1 6} = \"item1\"",
   "title": "Question 2.1"
  },
  {
   "name": "Question 2.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML2",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question2.2",
     "title": "What atomic number does an element with 92 protons have?",
     "valueName": "question2 2",
     "choices": [
      {
       "value": "item1",
       "text": "92"
      },
      {
       "value": "item2",
       "text": "46"
      },
      {
       "value": "item3",
       "text": "184"
      },
      {
       "value": "item4",
       "text": "8"
      }
     ]
    }
   ],
   "visibleIf": "{question2 1} <> \"item1\"",
   "title": "Question 2.2"
  },
  {
   "name": "Question 2.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2.3",
     "title": "What element has 77 protons?",
     "valueName": "question2 3",
     "choices": [
      {
       "value": "item1",
       "text": "V"
      },
      {
       "value": "item2",
       "text": "Hf"
      },
      {
       "value": "item3",
       "text": "As"
      },
      {
       "value": "item4",
       "text": "Ir"
      }
     ]
    }
   ],
   "visibleIf": "{question2 2} = \"item1\"",
   "title": "Question 2.3"
  },
  {
   "name": "Question 2.4",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2.4",
     "title": "What atomic number does an element with 77 protons have?",
     "valueName": "question2 4",
     "choices": [
      {
       "value": "item1",
       "text": "77"
      },
      {
       "value": "item2",
       "text": "149"
      },
      {
       "value": "item3",
       "text": "144"
      },
      {
       "value": "item4",
       "text": "38"
      }
     ]
    }
   ],
   "visibleIf": "{question2 3} = \"item1\"",
   "title": "Question 2.4"
  },
  {
   "name": "Question 2.5",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2.5",
     "title": "What element has 42 protons?",
     "valueName": "question2 5",
     "choices": [
      {
       "value": "item1",
       "text": "Mo"
      },
      {
       "value": "item2",
       "text": "Ca"
      },
      {
       "value": "item3",
       "text": "I"
      },
      {
       "value": "item4",
       "text": "Mn"
      }
     ]
    }
   ],
   "visibleIf": "{question2 4} = \"item1\"",
   "title": "Question 2.5"
  },
  {
   "name": "Question 2.6",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2.6",
     "title": "What atomic number does an element with 42 protons have?",
     "valueName": "question2 6",
     "choices": [
      {
       "value": "item1",
       "text": "42"
      },
      {
       "value": "item2",
       "text": "84"
      },
      {
       "value": "item3",
       "text": "21"
      },
      {
       "value": "item4",
       "text": "53"
      }
     ]
    }
   ],
   "visibleIf": "{question2 5} = \"item1\"",
   "title": "Question 2.6"
  },
  {
   "name": "Question 3.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question3.1",
     "title": "What is the Charge of an ion with 12 protons 12 Neutrons and 10 electrons?",
     "valueName": "question3 1",
     "choices": [
      {
       "value": "item1",
       "text": "2+"
      },
      {
       "value": "item2",
       "text": "1-"
      },
      {
       "value": "item3",
       "text": "2-"
      },
      {
       "value": "item4",
       "text": "0"
      }
     ]
    }
   ],
   "visibleIf": "{question2 1} = \"item1\" or {question2 6} = \"item1\"",
   "title": "Question 3.1"
  },
  {
   "name": "Question 3.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML3",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question3.2",
     "title": "What charge do 10 electrons have?",
     "valueName": "question3 2",
     "choices": [
      {
       "value": "item1",
       "text": "10-"
      },
      {
       "value": "item2",
       "text": "10+"
      },
      {
       "value": "item3",
       "text": "0"
      },
      {
       "value": "item4",
       "text": "2-"
      }
     ]
    }
   ],
   "visibleIf": "{question3 1} <> \"item1\"",
   "title": "Question 3.2"
  },
  {
   "name": "Question 3.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question3.3",
     "title": "What charge do 12 protons have?",
     "valueName": "question3 3",
     "choices": [
      {
       "value": "item1",
       "text": "12+"
      },
      {
       "value": "item2",
       "text": "12-"
      },
      {
       "value": "item3",
       "text": "0"
      },
      {
       "value": "item4",
       "text": "2+"
      }
     ]
    }
   ],
   "visibleIf": "{question3 2} = \"item1\"",
   "title": "Question 3.3"
  },
  {
   "name": "Question 4.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question4.1",
     "title": "What is the Charge of an ion with 9 protons 14 Neutrons and 13 electrons?",
     "valueName": "question4 1",
     "choices": [
      {
       "value": "item1",
       "text": "4-"
      },
      {
       "value": "item2",
       "text": "4+"
      },
      {
       "value": "item3",
       "text": "1+"
      },
      {
       "value": "item4",
       "text": "1-"
      }
     ]
    }
   ],
   "visibleIf": "{question3 1} = \"item1\" or {question3 3} = \"item1\"",
   "title": "Question 4.1"
  },
  {
   "name": "Question 4.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML4",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question4.2",
     "title": "What charge do 13 electrons have?",
     "valueName": "question4 2",
     "choices": [
      {
       "value": "item1",
       "text": "13-"
      },
      {
       "value": "item2",
       "text": "9-"
      },
      {
       "value": "item3",
       "text": "0"
      },
      {
       "value": "item4",
       "text": "2+"
      }
     ]
    }
   ],
   "visibleIf": "{question4 1} <> \"item1\"",
   "title": "Question 4.2"
  },
  {
   "name": "Question 4.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question4.3",
     "title": "What charge do 9 protons have?",
     "valueName": "question4 3",
     "choices": [
      {
       "value": "item1",
       "text": "9+"
      },
      {
       "value": "item2",
       "text": "9-"
      },
      {
       "value": "item3",
       "text": "0"
      },
      {
       "value": "item4",
       "text": "2+"
      }
     ]
    }
   ],
   "visibleIf": "{question4 2} = \"item1\"",
   "title": "Question 4.3"
  },
  {
   "name": "Question 5.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question5.1",
     "title": "What is the Charge of an ion with 8 protons 9 Neutrons and 10 electrons?",
     "valueName": "question5 1",
     "choices": [
      {
       "value": "item1",
       "text": "2-"
      },
      {
       "value": "item2",
       "text": "2+"
      },
      {
       "value": "item3",
       "text": "1+"
      },
      {
       "value": "item4",
       "text": "1-"
      }
     ]
    }
   ],
   "visibleIf": "{question4 1} = \"item1\" or {question4 3} = \"item1\"",
   "title": "Question 5.1"
  },
  {
   "name": "Question 5.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML5",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question5.2",
     "title": "What charge do 10 electrons have?",
     "valueName": "question5 2",
     "choices": [
      {
       "value": "item1",
       "text": "10-"
      },
      {
       "value": "item2",
       "text": "9-"
      },
      {
       "value": "item3",
       "text": "0"
      },
      {
       "value": "item4",
       "text": "10+"
      }
     ]
    }
   ],
   "visibleIf": "{question5 1} <> \"item1\"",
   "title": "Question 5.2"
  },
  {
   "name": "Question 5.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question5.3",
     "title": "What charge do 8 protons have?",
     "valueName": "question5 3",
     "choices": [
      {
       "value": "item1",
       "text": "8+"
      },
      {
       "value": "item2",
       "text": "8-"
      },
      {
       "value": "item3",
       "text": "0"
      },
      {
       "value": "item4",
       "text": "2+"
      }
     ]
    }
   ],
   "visibleIf": "{question5 2} = \"item1\"",
   "title": "Question 5.3"
  },
  {
   "name": "Question 6.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question6.1",
     "title": "How many Electrons are in Mg<sup>2+</sup>?",
     "valueName": "question6 1",
     "choices": [
      {
       "value": "item1",
       "text": "10"
      },
      {
       "value": "item2",
       "text": "12"
      },
      {
       "value": "item3",
       "text": "14"
      },
      {
       "value": "item4",
       "text": "24"
      }
     ]
    }
   ],
   "visibleIf": "{question5 1} = \"item1\" or {question5 3} = \"item1\"",
   "title": "Question 6.1"
  },
  {
   "name": "Question 6.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML6",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question6.2",
     "title": "How many protons are in Mg<sup>2+</sup>?",
     "valueName": "question6 2",
     "choices": [
      {
       "value": "item1",
       "text": "12"
      },
      {
       "value": "item2",
       "text": "10"
      },
      {
       "value": "item3",
       "text": "14"
      },
      {
       "value": "item4",
       "text": "24"
      }
     ]
    }
   ],
   "visibleIf": "{question6 1} <> \"item1\"",
   "title": "Question 6.2"
  },
  {
   "name": "Question 6.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question6.3",
     "title": "What is the atomic charge of Mg<sup>2+</sup>?",
     "valueName": "question6 3",
     "choices": [
      {
       "value": "item1",
       "text": "2+"
      },
      {
       "value": "item2",
       "text": "1-"
      },
      {
       "value": "item3",
       "text": "3+"
      },
      {
       "value": "item4",
       "text": "2-"
      }
     ]
    }
   ],
   "visibleIf": "{question6 2} = \"item1\"",
   "title": "Question 6.3"
  },
  {
   "name": "Question 6.4",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question6.4",
     "title": "What does the atomic charge of Mg<sup>2+</sup> represent?",
     "valueName": "question6 4",
     "choices": [
      {
       "value": "item1",
       "text": "The net charge of the ion."
      },
      {
       "value": "item2",
       "text": "The amount of electrons in the ion."
      },
      {
       "value": "item3",
       "text": "How negative the charge is."
      },
      {
       "value": "item4",
       "text": "All options."
      }
     ]
    }
   ],
   "visibleIf": "{question6 3} = \"item1\"",
   "title": "Question 6.4"
  },
  {
   "name": "Question 7.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question7.1",
     "title": "How many Electrons are in Fe<sup>3+</sup>?",
     "valueName": "question7 1",
     "choices": [
      {
       "value": "item1",
       "text": "23"
      },
      {
       "value": "item2",
       "text": "29"
      },
      {
       "value": "item3",
       "text": "26"
      },
      {
       "value": "item4",
       "text": "53"
      }
     ]
    }
   ],
   "visibleIf": "{question6 1} = \"item1\" or {question6 4} = \"item1\"",
   "title": "Question 7.1"
  },
  {
   "name": "Question 7.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML7",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question7.2",
     "title": "How many protons are in Fe<sup>3+</sup>?",
     "valueName": "question7 2",
     "choices": [
      {
       "value": "item1",
       "text": "26"
      },
      {
       "value": "item2",
       "text": "10"
      },
      {
       "value": "item3",
       "text": "14"
      },
      {
       "value": "item4",
       "text": "24"
      }
     ]
    }
   ],
   "visibleIf": "{question7 1} <> \"item1\"",
   "title": "Question 7.2"
  },
  {
   "name": "Question 7.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question7.3",
     "title": "What is the atomic charge of Fe<sup>3+</sup>?",
     "valueName": "question7 3",
     "choices": [
      {
       "value": "item1",
       "text": "2+"
      },
      {
       "value": "item2",
       "text": "1-"
      },
      {
       "value": "item3",
       "text": "3+"
      },
      {
       "value": "item4",
       "text": "2-"
      }
     ]
    }
   ],
   "visibleIf": "{question7 2} = \"item1\"",
   "title": "Question 7.3"
  },
  {
   "name": "Question 7.4",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question7.4",
     "title": "What does the atomic charge of Fe<sup>3+</sup> represent?",
     "valueName": "question7 4",
     "choices": [
      {
       "value": "item1",
       "text": "Net charge of the ion."
      },
      {
       "value": "item2",
       "text": "The amount of electrons."
      },
      {
       "value": "item3",
       "text": "How negative the charge is."
      },
      {
       "value": "item4",
       "text": "All options."
      }
     ]
    }
   ],
   "visibleIf": "{question7 3} = \"item1\"",
   "title": "Question 7.4"
  },
  {
   "name": "Question 8.1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question8.1",
     "title": "How many Electrons are in U<sup>4+</sup>?",
     "valueName": "question8 1",
     "choices": [
      {
       "value": "item1",
       "text": "88"
      },
      {
       "value": "item2",
       "text": "92"
      },
      {
       "value": "item3",
       "text": "96"
      },
      {
       "value": "item4",
       "text": "242"
      }
     ]
    }
   ],
   "visibleIf": "{question7 1} = \"item1\" or {question7 4} = \"item1\"",
   "title": "Question 8.1"
  },
  {
   "name": "Question 8.2",
   "elements": [
    {
     "type": "html",
     "name": "HTML8",
     "html": "<h3>You answered the previous question incorrectly. The following questions will help you understand the core concepts of this unit. </h3>"
    },
    {
     "type": "radiogroup",
     "name": "question8.2",
     "title": "How many protons are in U<sup>4+</sup>?",
     "valueName": "question8 2",
     "choices": [
      {
       "value": "item1",
       "text": "92"
      },
      {
       "value": "item2",
       "text": "238"
      },
      {
       "value": "item3",
       "text": "4"
      },
      {
       "value": "item4",
       "text": "96"
      }
     ]
    }
   ],
   "visibleIf": "{question8 1} <> \"item1\"",
   "title": "Question 8.2"
  },
  {
   "name": "Question 8.3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question8.3",
     "title": "What is the atomic charge of U<sup>4+</sup>?",
     "valueName": "question8 3",
     "choices": [
      {
       "value": "item1",
       "text": "4+"
      },
      {
       "value": "item2",
       "text": "4-"
      },
      {
       "value": "item3",
       "text": "3+"
      },
      {
       "value": "item4",
       "text": "2-"
      }
     ]
    }
   ],
   "visibleIf": "{question8 2} = \"item1\"",
   "title": "Question 8.3"
  },
  {
   "name": "Question 8.4",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question8.4",
     "title": "What does the atomic charge of <sub>16</sub><sup>8</sup>O<sup>2-</sup> represent?",
     "valueName": "question8 4",
     "choices": [
      {
       "value": "item1",
       "text": "Net charge of the ion."
      },
      {
       "value": "item2",
       "text": "Amount of electrons."
      },
      {
       "value": "item3",
       "text": "How negative the charge is."
      },
      {
       "value": "item4",
       "text": "All options."
      }
     ]
    }
   ],
   "visibleIf": "{question8 3} = \"item1\"",
   "title": "Question 8.4"
  },
  {
   "name": "Complete",
   "elements": [
    {
     "type": "html",
     "name": "Complete",
     "html": "<h3>You completed Unit 1</h3>"
    }
   ]
  }
 ],
 "sendResultOnPageNext": true,
 "showPrevButton": false,
 "showTitle": false,
 "questionsOrder": "random",
 "showQuestionNumbers": "off"
};
window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses


        classes.window = "sq-window";
        classes.root = "sq-root";
        classes.title = "sq-title";
        classes.item = "sq-item";
        classes.label = "sq-label";
        classes.navigation = "sq-nav";

        if (options.question.isRequired) {
            classes.title = "sq-title sq-title-required";
            classes.root = "sq-root sq-root-required";
        }

        if (options.question.getType() === "checkbox") {
            classes.root = "sq-root sq-root-cb";
        }
    });

$("#surveyElement").Survey({model: survey, onValidateQuestion: surveyValidateQuestion});;

//Create showdown markdown converter
var converter = new showdown.Converter();
survey
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the mardown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    });

    var subQuestions = []
    var questions = survey.getAllQuestions();
    for (var i = 0; i < questions.length; i++){
        if (questions[i].name.slice(-1) > 1) {
            subQuestions.push(questions[i].name);
        }
    }
    console.log(subQuestions);

    function surveyValidateQuestion(s, options) {
        for (var i = 0; i < subQuestions.length; i++){
            if (options.name == subQuestions[i]) {
               if(options.value != 'item1') {
                    options.error = "The answer is not correct. Please give another answer.";
                }
            }
        }
    }

//Randomizes answer order
// var questions = survey.getAllQuestions();
// for (var i = 0; i < questions.length; i++){
//     questions[i].choicesOrder = "random";
// }
// survey.render();
