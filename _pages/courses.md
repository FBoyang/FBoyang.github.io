---
permalink: /courses/
title: "Courses and Teaching"
excerpt: "This is a page not in th emain menu"
author_profile: true
redirect_from: 
  - "/nmp/"
  - "/nmp.html"
---



<!-- Boyang's Principal Component No-Linear Decomposition:
======
1. I live in Tianjin (very close to Beijing), China, but my hometown is Inner Mongolia.
2. I am fun of anime. I believe anime is the most direct way to convey certain meaning without any noise (for example the limitation of the acting skill, the limitation of physical camera).  -->


## Course Taken

<em>These are some of the CS/Math/Stats courses I wish to highlight </em>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .collapsible {
        cursor: pointer;
        padding: 8px;
        width: 50px;
        border: none;
        text-align: left;
        outline: none;
        font-weight: bold;
    }

    .active, .collapsible:hover {
        background-color: #f1f1f1;
    }

    .content {
        padding: 0;
        display: none;
        overflow: hidden;
    }

    .content table {
        margin: 0;
        width: 100%;
        table-layout: fixed;
    }

    .content th, .content td {
        padding: 8px;
        font-size: 1.1em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .course-id-col {
        width: 15%;
    }

    .title-col {
        width: 45%;
    }

    .year-col {
        width: 10%;
    }

    .instructor-col {
        width: 30%;
    }

    .content td:hover {
        white-space: normal;
        word-wrap: break-word;
        background-color: #f8f8f8;
    }

    .math-content th {
        border-top: 3px solid #4CAF50;
    }

    .stats-content th {
        border-top: 3px solid #2196F3;
    }

    .ml-content th {
        border-top: 3px solid #9C27B0;
    }
</style>

<div class="courses-container">
    <table>
        <tr>
            <th>Category</th>
        </tr>
        <tr>
            <td class="collapsible" onclick="toggleContent(this)">Math</td>
            <td colspan="4" class="content math-content">
                <table>
                    <tr>
                        <th class="course-id-col">Course ID</th>
                        <th class="title-col">Title</th>
                        <th class="year-col">Year Taken</th>
                        <th class="instructor-col">Instructor</th>
                    </tr>
                    <tr>
                        <td>01-(Math)-428</td>
                        <td>Graph Theory</td>
                        <td>2017</td>
                        <td>Dr. Surya Teja Gavva</td>
                    </tr>
                    <tr>
                        <td>01-(Math)-311</td>
                        <td>Real Analysis</td>
                        <td>2019</td>
                        <td>Prof. John man shun Ma</td>
                    </tr>
                    <tr>
                        <td>01-(Math)-373</td>
                        <td>Numerical Analysis</td>
                        <td>2019</td>
                        <td>Dr. Shane D. Kepley</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="collapsible" onclick="toggleContent(this)">Stats</td>
            <td colspan="4" class="content stats-content">
                <table>
                    <tr>
                        <th class="course-id-col">Course ID</th>
                        <th class="title-col">Title</th>
                        <th class="year-col">Year Taken</th>
                        <th class="instructor-col">Instructor</th>
                    </tr>
                    <tr>
                        <td>Stats 201C</td>
                        <td>Advanced Modeling and Inference</td>
                        <td>2020</td>
                        <td>Prof. Qing Zhou</td>
                    </tr>
                    <tr>
                        <td>Stats 200B</td>
                        <td>Theoretical Stats</td>
                        <td>2021</td>
                        <td>Prof. Arash A. Amini</td>
                    </tr>
                    <tr>
                        <td>Stats 200C</td>
                        <td>High Dimensional Stats</td>
                        <td>2021</td>
                        <td>Prof. Arash A. Amini</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="collapsible" onclick="toggleContent(this)">ML/AI</td>
            <td colspan="4" class="content ml-content">
                <table>
                    <tr>
                        <th class="course-id-col">Course ID</th>
                        <th class="title-col">Title</th>
                        <th class="year-col">Year Taken</th>
                        <th class="instructor-col">Instructor</th>
                    </tr>
                    <tr>
                        <td>ECE 236B</td>
                        <td>Convex Optimization</td>
                        <td>2020</td>
                        <td>Prof. Lieven Vandenberghe</td>
                    </tr>
                    <tr>
                        <td>CS/CM 226</td>
                        <td>Machine Learning for Bioinformatics</td>
                        <td>2019</td>
                        <td>Prof. Sriram Sankararaman</td>
                    </tr>
                    <tr>
                        <td>01-(CS)-440</td>
                        <td>Artificial Intelligent</td>
                        <td>2018</td>
                        <td>Prof. Abdeslam Boularias</td>
                    </tr>
                    <tr>
                        <td>CS 260</td>
                        <td>Machine Learning Algorithms</td>
                        <td>2021</td>
                        <td>Prof. Quanquan Gu</td>
                    </tr>
                    <tr>
                        <td>CS 269</td>
                        <td>Large Scale Machine Learning</td>
                        <td>2021</td>
                        <td>Prof. Baharan Mirzasoleiman</td>
                    </tr>
                    <tr>
                        <td>CS 267A</td>
                        <td>Probabilistic Programming and Relational Learning</td>
                        <td>2022</td>
                        <td>Prof. Guy Van den Broeck</td>
                    </tr>
                    <tr>
                        <td>CS 261</td>
                        <td>Deep Generative Models</td>
                        <td>2024</td>
                        <td>Prof. Aditya Grover</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>

<script>
function toggleContent(element) {
    element.classList.toggle("active");
    var content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var contents = document.getElementsByClassName("content");
    for(var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
});
</script>


<!-- | Course ID     | Title       | Year Taken  | Instructor  |
| -----------   | ----------- | ----------- | ----------- |
| 01-(Math)-428   | Graph Theory    | 2017 (Undergrad)  | Dr. Surya Teja Gavva |
| 01-(Math)-311    | Real Analysis      | 2019 (Undergrad)   | Prof. John man shun Ma |
| 01-(Math)-373   | Numerical Analysis        | 2019 (Undergrad)   | Dr. Shane D. Kepley |
| Stats 201C  | Advanced Modeling and Inference  | 2020  | Prof. Qing Zhou |
| Stats 200B  | Theoretical Stats  | 2021  | Prof. Arash A. Amini |
| 01-(CS)-440   | Artificial Intelligent    | 2018 (Undergrad)  | Prof. Abdeslam Boularias|
| Stats 200C  | High Dimensional Stats  | 2021  | Prof. Arash A. Amini |
| ECE 236B  | Convex Optimization   | 2020  | Prof. Lieven Vandenberghe |
| CS/CM 226  | Machine Learning for Bioinformatics   | 2019  | Prof. Sriram Sankararaman |
| CS 260 | Machine Learning Algorithms | 2021 | Prof. Quanquan Gu |
| CS 269 | Large Scale Machine Learning | 2021 | Prof. Baharan Mirzasoleiman |
| CS 267A | Probabilistic Programming and Relational Learning | 2022 | Prof. Guy Van den Broeck |
| CS 261 | Deep Generative Models | 2024 | Prof. Aditya Grover | -->

## Teaching Assistantship

| Course ID     | Title       | Year Teaching  | Instructor  |
| -----------   | ----------- | ----------- | ----------- |
| CS 181 | Formal Languages and Automata Theory    | 2020  | Prof. Raghu Meka|
| CS 144 | Web Applications      | 2021   | Prof. John Cho |
| CS 146 | Intro to Machine Learning | 2022/ 2024 | Prof. Sriram Sankararaman |

<small>↩︎ [Latest Teaching Evaluation](../files/FU_B._-_24W_COM_SCI_M146_DIS_1H.pdf)</small>

## Mentorship Experience

| Mentored student | Position        | Year              |
| ---------------- | ----------------|  ---------------- | 
| [Prateek Anand](https://www.linkedin.com/in/prateek-anand-21431a1b4/) | Undergrad student (Now Ph.D. student); UCLA      | 2022 - 2024   |
| [Aakarsh Anand](https://www.linkedin.com/in/aakarsh-anand-8943211b4/) | Undergrad student (Now Ph.D. student); UCLA      | 2022 - 2024   |
| [Zhengtong Liu](https://zhengtong-liu.github.io/) | Undergrad student (Now Ph.D. student); UCLA      | 2021 - 2023   |
| Henry Koelling | Undergrad student; Carleton College      | 2021   |
| Nicholas Liu | Undergrad student; Brown University      | 2021   |
| Trong Pham | Undergrad student; California State University, Fullerton      | 2021   |
| Kevin Delao | Master student; California State University Los Angeles    | 2020  |
| Maya Singh | Undergrad student; UCLA      | 2020   |


