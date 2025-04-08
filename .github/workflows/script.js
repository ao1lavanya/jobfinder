const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechSoft",
      location: "Chennai",
      type: "Full-Time",
      description: "Build modern web interfaces with HTML, CSS, and JavaScript."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Remote",
      type: "Part-Time",
      description: "Design user-friendly and beautiful interfaces."
    },
    {
      id: 3,
      title: "React Developer",
      company: "WebWorks",
      location: "Bangalore",
      type: "Full-Time",
      description: "Create dynamic and performant SPAs using React.js."
    }
  ];
  
  const jobList = document.getElementById("job-list");
  const jobDetails = document.getElementById("job-details");
  
  function showJobList() {
    jobList.innerHTML = "";
    jobDetails.classList.add("hidden");
  
    jobs.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <h2>${job.title}</h2>
        <p>${job.company} - ${job.location}</p>
        <p><strong>${job.type}</strong></p>
        <a onclick="viewJob(${job.id})">View Details</a>
      `;
      jobList.appendChild(card);
    });
  }
  
  function viewJob(id) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;
  
    jobDetails.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p>${job.description}</p>
      <a onclick="showJobList()">← Back </a>
    `;
  
    jobDetails.classList.remove("hidden");
    jobList.innerHTML = "";
  }
  
  showJobList();
  