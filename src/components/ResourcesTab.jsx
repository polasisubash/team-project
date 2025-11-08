import React from 'react';

const ResourcesTab = () => {
  const resources = [
    {
      icon: '🏥',
      title: 'Health Center',
      description: 'Medical services and health screenings',
      phone: '(555) 123-4567'
    },
    {
      icon: '🚨',
      title: 'Crisis Hotline',
      description: '24/7 emergency mental health support',
      phone: '(555) 911-HELP'
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      description: 'Prescription and over-the-counter medications',
      phone: '(555) 123-MEDS'
    },
    {
      icon: '🍎',
      title: 'Nutrition Services',
      description: 'Dietary consultations and meal planning',
      phone: '(555) 123-FOOD'
    },
    {
      icon: '🏃‍♂️',
      title: 'Recreation Center',
      description: 'Sports facilities and fitness programs',
      phone: '(555) 123-MOVE'
    },
    {
      icon: '📚',
      title: 'Wellness Library',
      description: 'Health education resources and materials',
      phone: '(555) 123-READ'
    }
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.0), rgba(255,245,247,0.6))',
        borderRadius: '1rem',
        padding: '1rem'
      }}
    >
      {resources.map((resource, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 card-hover"
          style={{ boxShadow: '0 18px 36px rgba(31,41,55,0.12)' }}
        >
          <div className="text-3xl mb-4">{resource.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
          <p className="text-gray-600 mb-4">{resource.description}</p>
          <p className="text-sm text-gray-500">📞 {resource.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ResourcesTab;