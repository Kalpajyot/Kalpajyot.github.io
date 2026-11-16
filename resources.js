const neuroscienceResources = [
  { name: 'Neuroscience News', category: 'news', label: 'Neuroscience News & Discoveries', description: 'Accessible reporting on neuroscience research, discoveries and brain science.', url: 'https://neurosciencenews.com/', action: 'Visit Website' },
  { name: 'The Transmitter', category: 'news', label: 'Neuroscience News & Discoveries', description: 'Independent journalism and expert perspectives on neuroscience.', url: 'https://www.thetransmitter.org/', action: 'Visit Website' },
  { name: 'Nature Neuroscience', category: 'news', label: 'Neuroscience News & Discoveries', description: 'Research and commentary from a leading neuroscience journal.', url: 'https://www.nature.com/neuro/', action: 'Visit Website' },
  { name: 'ScienceDaily', category: 'news', label: 'Neuroscience News & Discoveries', description: 'Mind and brain research news for curious readers.', url: 'https://www.sciencedaily.com/news/mind_brain/', action: 'Visit Website' },
  { name: 'Anil Seth', category: 'consciousness', label: 'Consciousness & Awareness', description: 'Research, writing and resources on consciousness and perception.', url: 'https://www.anilseth.com/', action: 'Visit Website' },
  { name: 'Association for the Scientific Study of Consciousness', category: 'consciousness', label: 'Consciousness & Awareness', description: 'A community for scientific study of consciousness and awareness.', url: 'https://theassc.org/', action: 'Visit Website' },
  { name: 'Neuroscience of Consciousness', category: 'consciousness', label: 'Consciousness & Awareness', description: 'An academic journal focused on consciousness research.', url: 'https://academic.oup.com/nc', action: 'Visit Journal' },
  { name: 'Nature Consciousness', category: 'consciousness', label: 'Consciousness & Awareness', description: 'Curated research and articles on consciousness science.', url: 'https://www.nature.com/subjects/consciousness', action: 'Visit Website' },
  { name: 'MNE-Python', category: 'signals', label: 'Neural Signal Processing & Computational Neuroscience', description: 'Tutorials for exploring EEG, MEG and other neurophysiological data.', url: 'https://mne.tools/stable/auto_tutorials/', action: 'Open Tutorials' },
  { name: 'EEGLAB', category: 'signals', label: 'Neural Signal Processing & Computational Neuroscience', description: 'Tools and tutorials for processing and analyzing EEG data.', url: 'https://eeglab.org/tutorials/', action: 'Open Tutorials' },
  { name: 'FieldTrip', category: 'signals', label: 'Neural Signal Processing & Computational Neuroscience', description: 'A MATLAB toolbox and tutorial collection for neurophysiology.', url: 'https://www.fieldtriptoolbox.org/tutorial/', action: 'Open Tutorials' },
  { name: 'Brainstorm', category: 'signals', label: 'Neural Signal Processing & Computational Neuroscience', description: 'A platform for visualizing and processing brain recordings.', url: 'https://neuroimage.usc.edu/brainstorm/', action: 'Visit Website' },
  { name: 'Frontiers in Neuroscience', category: 'signals', label: 'Neural Signal Processing & Computational Neuroscience', description: 'Open research across neural technology and computational neuroscience.', url: 'https://www.frontiersin.org/journals/neuroscience', action: 'Visit Journal' },
  { name: 'Meta Reality Labs', category: 'bci', label: 'Brain-Computer Interfaces & Neurotechnology', description: 'Updates on immersive computing, neural interfaces and human-computer interaction.', url: 'https://tech.facebook.com/reality-labs/', action: 'Visit Website' },
  { name: 'Meta AI Research', category: 'bci', label: 'Brain-Computer Interfaces & Neurotechnology', description: 'Research updates spanning AI, perception and intelligent systems.', url: 'https://ai.meta.com/blog/', action: 'Read Updates' },
  { name: 'Neuralink', category: 'bci', label: 'Brain-Computer Interfaces & Neurotechnology', description: 'Company updates on neural implants and brain-computer interfaces.', url: 'https://neuralink.com/updates/', action: 'Read Updates' },
  { name: 'Huberman Lab', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'Neuroscience conversations and educational videos.', url: 'https://www.youtube.com/@hubermanlab', action: 'Watch on YouTube' },
  { name: 'Brain Inspired', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'Conversations about neuroscience, cognition and artificial intelligence.', url: 'https://braininspired.co/', action: 'Visit Website' },
  { name: 'Neuroscientifically Challenged', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'Accessible explanations of neuroscience concepts and discoveries.', url: 'https://www.youtube.com/@neurochallenged', action: 'Watch on YouTube' },
  { name: 'David Eagleman', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'A starting point for talks and videos on the brain and behavior.', url: 'https://www.youtube.com/results?search_query=David+Eagleman+neuroscience', action: 'Watch on YouTube' },
  { name: 'Anil Seth', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'Talks and videos exploring consciousness and perception.', url: 'https://www.youtube.com/results?search_query=Anil+Seth+consciousness', action: 'Watch on YouTube' },
  { name: 'Lex Fridman', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'Long-form conversations with scientists, engineers and thinkers.', url: 'https://www.youtube.com/@lexfridman', action: 'Watch on YouTube' },
  { name: '3Blue1Brown', category: 'media', label: 'Neuroscience YouTube Channels & Podcasts', description: 'Visual mathematics and ideas that support computational thinking.', url: 'https://www.youtube.com/@3blue1brown', action: 'Watch on YouTube' },
  { name: 'eLife', category: 'journals', label: 'Research Journals & Scientific Literature', description: 'Open-access research and discussion across the life sciences.', url: 'https://elifesciences.org/', action: 'Read Research' },
  { name: 'bioRxiv Neuroscience', category: 'journals', label: 'Research Journals & Scientific Literature', description: 'A collection of neuroscience preprints for early research access.', url: 'https://www.biorxiv.org/collection/neuroscience', action: 'Browse Preprints' },
  { name: 'PubMed', category: 'journals', label: 'Research Journals & Scientific Literature', description: 'A searchable database of biomedical and life-science literature.', url: 'https://pubmed.ncbi.nlm.nih.gov/', action: 'Search Literature' },
  { name: 'Frontiers in Neuroscience', category: 'journals', label: 'Research Journals & Scientific Literature', description: 'Open-access neuroscience research and reviews.', url: 'https://www.frontiersin.org/journals/neuroscience', action: 'Visit Journal' },
  { name: 'Cerebral Cortex', category: 'journals', label: 'Research Journals & Scientific Literature', description: 'Research on the structure and function of the cerebral cortex.', url: 'https://academic.oup.com/cercor', action: 'Visit Journal' },
  { name: 'NIMHANS Centre for Consciousness Studies', category: 'journals', label: 'Research Journals & Scientific Literature', description: 'A centre focused on consciousness studies and related research.', url: 'https://www.ccsnimhans.com/', action: 'Visit Website' }
];

const resourceGrid = document.querySelector('#resource-grid');
const resourceSearch = document.querySelector('#resource-search');
const resourceEmpty = document.querySelector('#resource-empty');
const resourceFilters = document.querySelectorAll('.resource-filter');
let activeCategory = 'all';

const renderResources = () => {
  const query = resourceSearch.value.trim().toLowerCase();
  const matches = neuroscienceResources.filter((resource) => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const searchableText = `${resource.name} ${resource.label} ${resource.description}`.toLowerCase();
    return matchesCategory && (!query || searchableText.includes(query));
  });
  resourceGrid.innerHTML = matches.map((resource) => `
    <article class="resource-card">
      <p class="resource-category">${resource.label}</p>
      <h2>${resource.name}</h2>
      <p>${resource.description}</p>
      <a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.action} <span>↗</span></a>
    </article>
  `).join('');
  resourceEmpty.hidden = matches.length > 0;
};

resourceFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    activeCategory = filter.dataset.category;
    resourceFilters.forEach((item) => item.classList.toggle('is-active', item === filter));
    renderResources();
  });
});
resourceSearch.addEventListener('input', renderResources);
renderResources();
