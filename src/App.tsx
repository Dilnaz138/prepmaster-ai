import VocabularyReviewPage from "./pages/VocabularyReviewPage";
import VocabularyQuizPage from "./pages/VocabularyQuizPage";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import IELTSPage from "./pages/IELTSPage";
import ProgressPage from "./pages/ProgressPage";

import ReadingPage from "./pages/ReadingPage";
import ReadingTestsPage from "./pages/ReadingTestsPage";
import TechnologyReadingPage from "./pages/TechnologyReadingPage";
import ClimateReadingPage from "./pages/ClimateReadingPage";

import WritingPage from "./pages/WritingPage";
import WritingFoundationsPage from "./pages/WritingFoundationsPage";
import WritingFeedbackPage from "./pages/WritingFeedbackPage";
import WritingHistoryPage from "./pages/WritingHistoryPage";

import ListeningPage from "./pages/ListeningPage";

import TopicAcademyPage from "./pages/TopicAcademyPage";
import RenewableEnergyPage from "./pages/RenewableEnergyPage";
import OnlineEducationPage from "./pages/OnlineEducationPage";
import AIEmploymentPage from "./pages/AIEmploymentPage";

import AirPollutionPage from "./pages/AirPollutionPage";
import PlasticPollutionPage from "./pages/PlasticPollutionPage";

import HigherEducationPage from "./pages/HigherEducationPage";
import ForeignLanguagesPage from "./pages/ForeignLanguagesPage";

import SocialMediaPage from "./pages/SocialMediaPage";
import TechnologyPrivacyPage from "./pages/TechnologyPrivacyPage";

import UrbanisationPage from "./pages/UrbanisationPage";
import VolunteeringPage from "./pages/VolunteeringPage";
import WorkLifeBalancePage from "./pages/WorkLifeBalancePage";

import HealthyLifestylePage from "./pages/HealthyLifestylePage";
import PublicHealthcarePage from "./pages/PublicHealthcarePage";
import MentalWellbeingPage from "./pages/MentalWellbeingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FD] text-[#1E2340] md:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<DashboardPage />} />
          <Route path="/progress" element={<ProgressPage />} />

          {/* IELTS */}
          <Route path="/ielts" element={<IELTSPage />} />

          {/* Reading */}
          <Route path="/ielts/reading" element={<ReadingPage />} />
          <Route path="/ielts/reading/tests" element={<ReadingTestsPage />} />
          <Route path="/ielts/reading/technology" element={<TechnologyReadingPage />} />
          <Route path="/ielts/reading/climate" element={<ClimateReadingPage />} />

          {/* Writing */}
          <Route path="/ielts/writing" element={<WritingPage />} />
          <Route path="/ielts/writing/foundations" element={<WritingFoundationsPage />} />
          <Route path="/ielts/writing/feedback" element={<WritingFeedbackPage />} />
          <Route path="/ielts/writing/history" element={<WritingHistoryPage />} />
          <Route path="/ai-tutor" element={<WritingFeedbackPage />} />

          {/* Listening */}
          <Route path="/ielts/listening" element={<ListeningPage />} />

          {/* Vocabulary */}
          <Route path="/ielts/vocabulary/review" element={<VocabularyReviewPage />} />
          <Route path="/ielts/vocabulary/quiz" element={<VocabularyQuizPage />} />

          {/* Topic Academy */}
          <Route path="/ielts/topics" element={<TopicAcademyPage />} />

          {/* Environment */}
          <Route path="/ielts/topics/renewable-energy" element={<RenewableEnergyPage />} />
          <Route path="/ielts/topics/air-pollution" element={<AirPollutionPage />} />
          <Route path="/ielts/topics/plastic-pollution" element={<PlasticPollutionPage />} />

          {/* Education */}
          <Route path="/ielts/topics/online-education" element={<OnlineEducationPage />} />
          <Route path="/ielts/topics/higher-education" element={<HigherEducationPage />} />
          <Route path="/ielts/topics/foreign-languages" element={<ForeignLanguagesPage />} />

          {/* Technology */}
          <Route path="/ielts/topics/ai-employment" element={<AIEmploymentPage />} />
          <Route path="/ielts/topics/social-media" element={<SocialMediaPage />} />
          <Route path="/ielts/topics/technology-privacy" element={<TechnologyPrivacyPage />} />

          {/* Society */}
          <Route path="/ielts/topics/urbanisation" element={<UrbanisationPage />} />
          <Route path="/ielts/topics/volunteering" element={<VolunteeringPage />} />
          <Route path="/ielts/topics/work-life-balance" element={<WorkLifeBalancePage />} />

          {/* Health */}
          <Route path="/ielts/topics/healthy-lifestyle" element={<HealthyLifestylePage />} />
          <Route path="/ielts/topics/public-healthcare" element={<PublicHealthcarePage />} />
          <Route path="/ielts/topics/mental-wellbeing" element={<MentalWellbeingPage />} />
        </Routes>
      </div>
    </div>
  );
}
