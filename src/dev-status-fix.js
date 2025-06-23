// Add this to fix dev server status code visibility
if (import.meta.hot) {
  import.meta.hot.on('astro:after-update', () => {
    const islands = document.querySelectorAll('astro-island[data-status]');
    
    islands.forEach(island => {
      const status = island.dataset.status;
      if (status === '410' || status === '404') {
        console.log(`[Dev Fix] Simulating ${status} status for route`);
        document.title = `${status} ${
          status === '410' ? 'Gone' : 'Not Found'
        } | ${document.title}`;
        
        // Update browser history
        history.replaceState({}, '', window.location.pathname + window.location.search);
      }
    });
  });
}