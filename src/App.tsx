import ChapterCard from "./components/ChapterCard";


import Navbar from "./components/Navbar/Navbar";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";

import chapter1 from "./images/chapter1.png";
import chapter2 from "./images/chapter2.png";
import chapter3 from "./images/chapter3.png";

import chapter4 from "./images/chapter4.png";
import chapter5 from "./images/chapter5.png";
import chapter6 from "./images/chapter6.png";
import chapter7 from "./images/chapter7.png";
import chapter8 from "./images/chapter8.png";


function App() {
  return (
    <>

      <Navbar />

      <main style={{ paddingTop: "70px" }}>
        <section id="chapter1">

          <ChapterCard
            chapter="Chapter 1"
            title="Build the portfolio"
            description="The design portfolio is the crux of the job search process, especially for new designers.

It's a distillation of the depth and breadth of your work, and one of the first things that a recruiter or design manager is going to look at when considering whether to move forward with your application."
            image={chapter1}
            background="#E9A1AA"
            dark={false}
            topics={[
              "What's the point of a portfolio?",
              "Tools for creating portfolios",
              "Who portfolios are for",
              "What makes a portfolio great",
              "Portfolio inspiration",
            ]}
          />

        </section>

        <section id="chapter2">
          <ChapterCard
            chapter="Chapter 2"
            title="Writing case studies"
            description="The case study is the real meat of the portfolio. Your actual projects are clearly the most important portfolio element, and they are what's going to land you the interview and ultimately get a job."
            image={chapter2}
            background="#8D34F7"
            dark={true}
            topics={[
              "Selecting your case studies",
              "Case study tips for new designers",
              "Telling great stories",
              "What a case study should answer",
              "Example case study breakdown",
              "Showing your solution",
              "Showing your process",
              "Showing the impact",
              "Case study inspiration",
              "Case study template",
            ]}
          />
        </section>


        <section id="chapter3">
          <ChapterCard
            chapter="Chapter 3"
            title="Portfolio presentations"
            description="If creating an entire portfolio and a polished resume wasn't enough for you, you're in luck: you need a portfolio presentation, too. Fortunately, if you've already put the effort into a great portfolio, translating it over to a presentation should be relatively straightforward.

In this chapter, I cover tips and examples to bring your portfolio to life through an engaging end-to-end presentation."
            image={chapter3}
            background="#74D69A"
            // imageClass="chapter3-image"
            topics={[
              "Introducing yourself",
              "Presenting the case study",
              "Sharing your process",
              "Answering questions from the audience",
              "The presentation scorecard",
            ]}
          />
        </section>

        <section id="chapter4">
          <ChapterCard
            chapter="Chapter 4"
            title="Resumes & cover letters"
            description={`Writing the resume is a much smaller (but no less important) part of the application process. This one page is a high-level accounting of all the relevant things you've done, and your first impression with a recruiter. In this chapter, I'll give you my take on how to make an excellent resume.`}
            image={chapter4}
            background="#F7C433"
            imageClass="chapter4-image"
            topics={[
              "The resume's purpose",
              "Writing work & project entries",
              "Education, extracurriculars & more",
              "Tips on writing style",
              "Resume visual design",
              "Writing cover letters",
            ]}
          /></section>

        <section id="chapter5">
          <ChapterCard
            chapter="Chapter 5"
            title="Find & apply to jobs"
            description={`There are plenty of job boards and websites listing thousands of opportunities, but finding the right one can be overwhelming. In this chapter, we'll cover where to look, how to apply effectively, and how to increase your chances of getting interview calls.`}
            image={chapter5}
            background="#3C70E2"
            dark={true}
            imageClass="chapter5-image"
            topics={[
              "Where to find design jobs",
              "How to evaluate job descriptions",
              "Networking & referrals",
              "Cold emails and LinkedIn outreach",
              "Application tracking",
              "Common mistakes to avoid",
            ]}
          />
        </section>

        <section id="chapter6">
          <ChapterCard
            chapter="Chapter 6"
            title="Preparing for Behavioral Interviews"
            description="Behavioral interviews make up much of the product design interview process..."
            image={chapter6}
            background="#B6A587"
            imageClass="chapter6-image"
            topics={[
              { title: "Answering questions with the STAR method" },
              { title: "Additional question answering tips" },
              { title: "The elevator pitch" },
              { title: "The recruiter call" },
              { title: "The hiring manager call" },
              { title: "The initial portfolio review" },
              {
                title: "The on-site interview",
                children: [
                  "The PM 1:1",
                  "The engineer 1:1",
                  "The design leadership 1:1",
                  "The hiring manager + recruiter wrap-up",
                  "Whiteboarding challenges and app critiques     (next chapter)",
                ],
              },
            ]}
          />
        </section>


        <section id="chapter7">
          <ChapterCard
            chapter="Chapter 7"
            title="Design challenges"
            description={`Design challenges can feel daunting. They're usually conducted live with one or more interviewers, and feel like you're being put on the spot and asked to do a weird performative version of the design process. Chances are that many of the companies you interview with will have you do some form of technical interview.

Fortunately, these sorts of interviews can be practiced and prepared for with clear frameworks that I'll cover in this chapter.`}
            image={chapter7}
            background="#D6D279"
            imageClass="chapter7-image"
            topics={[
              "The whiteboarding challenge",
              "App critiques",
              {
                title: "The take-home challenge",
                children: [
                  "Full take-home example challenge",
                ],
              },
            ]}
          />
        </section>

        <section id="chapter8">
          <ChapterCard
            chapter="Chapter 8"
            title="The offer stage"
            description={`Securing the offer may be the last step in your interviewing journey, but negotiation happens from the very first call. In this chapter, I'll lay out how to determine your asking comp, how to think about "leveling", and how to negotiate an offer that meets your needs.`}
            image={chapter8}
            background="#181A22"
            dark={true}
            imageClass="chapter8-image"
            topics={[
              "Determining your compensation",
              "How to research compensation bands",
              "The elements of total compensation",
              "How to negotiate compensation",
              "Submitting references",
              "Example offer letter",
            ]}
          />
        </section>

      </main>
      <ScrollTopButton />

    </>

  );
}

export default App;