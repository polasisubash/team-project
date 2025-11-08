import React from 'react';

const PsychologyArticles = ({ currentFilter }) => {
  const articles = [
    // Anxiety
    {
      id: 1,
      title: "What Is Anxiety?",
      author: "American Psychological Association",
      category: "anxiety",
      summary: "Overview of anxiety, types, and evidence-based treatment options, including CBT and exposure therapy.",
      source: "https://www.apa.org/topics/anxiety"
    },
    {
      id: 2,
      title: "Anxiety Disorders",
      author: "National Institute of Mental Health (NIMH)",
      category: "anxiety",
      summary: "Signs, symptoms, and treatment information from the U.S. National Institutes of Health.",
      source: "https://www.nimh.nih.gov/health/topics/anxiety-disorders"
    },
    // Depression
    {
      id: 3,
      title: "Depression",
      author: "World Health Organization (WHO)",
      category: "depression",
      summary: "Global overview of depression, risk factors, and recommended interventions.",
      source: "https://www.who.int/news-room/fact-sheets/detail/depression"
    },
    {
      id: 4,
      title: "Depression: What You Need to Know",
      author: "NIMH",
      category: "depression",
      summary: "Evidence-based information on depression symptoms, causes, and treatments.",
      source: "https://www.nimh.nih.gov/health/topics/depression"
    },
    // Stress
    {
      id: 5,
      title: "Stress and Health",
      author: "APA",
      category: "stress",
      summary: "How stress affects the body and strategies to manage stress effectively.",
      source: "https://www.apa.org/topics/stress"
    },
    {
      id: 6,
      title: "Stress management",
      author: "Mayo Clinic",
      category: "stress",
      summary: "Practical, clinically reviewed strategies for day-to-day stress reduction.",
      source: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/basics/stress-basics/hlv-20049495"
    },
    // Sleep
    {
      id: 7,
      title: "Healthy Sleep",
      author: "Harvard Medical School (Division of Sleep Medicine)",
      category: "sleep",
      summary: "Why sleep matters and science-backed ways to improve sleep quality.",
      source: "https://healthysleep.med.harvard.edu/healthy/"
    },
    // Relationships / Self-esteem / Academic pressure
    {
      id: 8,
      title: "Building Self-Esteem",
      author: "NHS (UK)",
      category: "self_esteem",
      summary: "Self-help guidance for developing healthier self-esteem and self-compassion.",
      source: "https://www.nhs.uk/mental-health/self-help/tips-and-support/raising-low-self-esteem/"
    },
    {
      id: 9,
      title: "Healthy Relationships",
      author: "NIH (MedlinePlus)",
      category: "relationships",
      summary: "Foundations of healthy communication and boundaries in relationships.",
      source: "https://medlineplus.gov/healthyrelationships.html"
    },
    {
      id: 10,
      title: "Coping with Exam Stress",
      author: "Mind (UK)",
      category: "academic",
      summary: "Student-friendly guide to managing academic pressure and exam stress.",
      source: "https://www.mind.org.uk/information-support/tips-for-everyday-living/student-life/exam-stress/"
    }
  ];

  const filteredArticles = currentFilter === 'all' ? articles : articles.filter(article => article.category === currentFilter);

  return (
    <div className="mb-8" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(239,246,255,0.7))', borderRadius: '1rem', padding: '1rem' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredArticles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-6 card-hover" style={{ boxShadow: '0 18px 36px rgba(99,102,241,0.18)' }}>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{article.title}</h4>
            <p className="text-indigo-600 text-sm font-medium mb-2">{article.author}</p>
            <p className="text-gray-600 text-sm mb-3">{article.summary}</p>
            {article.source && (
              <a
                href={article.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-block' }}
              >
                Read Source ↗
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-4 text-center">
        Educational resources only. Not a substitute for professional care. For emergencies, call local emergency services or 988 (US).
      </div>
    </div>
  );
};

export default PsychologyArticles;