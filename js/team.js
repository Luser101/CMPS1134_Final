/**
 * Team Page JavaScript
 * Handles team member modal interactions and animations
 */

// Team member data
const teamMembers = {
  adrian: {
    name: 'Adrian Morris',
    role: 'Developer',
    study: 'Associate in Information Technology',
    interest: 'Web-Development, Cyber Security & Networking',
    specialties: ['Interested in Website development/management'],
    about: 'Adrian is passionate about cybersecurity and networking. Adrian plays a crucial role in the development of the entire.'
  },
  andrew: {
    name: 'Andrew Faber',
    role: 'Developer',
    study: 'Associate in Information Technology',
    interest: 'Software Development',
    specialties: ['...'],
    about: 'Andrew specializes in backend development and software architecture. His strong foundation in computer science principles enables him to desFull-Stack', 'Network Security', 'System Administration', 'Web Development'ign robust and scalable solutions for complex problems.'
  },
  derick: {
    name: 'Derick Cal',
    role: 'Developer',
    study: 'Associate in Information Technology',
    interest: 'Computer Science',Full-Stack', 'Network Security', 'System Administration', 'Web Development'
    specialties: ['...'],
    about: 'Derick has a deep understanding of computer science fundamentals and operating systems. His expertise in algorithms and systems design ensures our applications run efficiently and effectively.'
  },
  lisandro: {
    name: 'Lisandro Figueroa',
    role: 'Developer',
    study: 'Associate in Information Technology',
    interest: 'Technology & Innovation',
    specialties: ['...'],
    about: 'Lisandro brings creativity and technical excellence to the frontend. His passion for technology and innovation drives him to create beautiful, responsive, and user-friendly interfaces.'
  }
};

/**
 * Open member modal
 */
function openMemberModal(memberId) {
  const member = teamMembers[memberId];
  if (!member) return;

  const modal = document.getElementById('memberModal');
  
  // Populate modal content
  document.getElementById('modalImage').src = `../image/${memberId === 'adrian' ? 'adrian_morris.jpg' : memberId === 'andrew' ? 'andrew_faber.jpg' : memberId === 'derick' ? 'derick_cal.jpg' : 'lisandro_figeroa.jpg'}`;
  document.getElementById('modalName').textContent = member.name;
  document.getElementById('modalRole').textContent = member.role;
  document.getElementById('modalStudy').textContent = member.study;
  document.getElementById('modalInterest').textContent = member.interest;
  document.getElementById('modalAbout').textContent = member.about;
  
  // Populate specialties
  const specialtiesContainer = document.getElementById('modalSpecialties');
  specialtiesContainer.innerHTML = '';
  member.specialties.forEach(specialty => {
    const span = document.createElement('span');
    span.textContent = specialty;
    specialtiesContainer.appendChild(span);
  });
  
  // Show modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  console.log(`📝 Opened modal for ${member.name}`);
}

/**
 * Close member modal
 */
function closeMemberModal() {
  const modal = document.getElementById('memberModal');
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
  
  console.log('❌ Closed modal');
}

/**
 * Setup event listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('👥 Team page loaded');
  
  const modal = document.getElementById('memberModal');
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeMemberModal();
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMemberModal();
    }
  });
  
  console.log('✅ Team page ready');
});

/**
 * Add smooth scroll behavior
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

