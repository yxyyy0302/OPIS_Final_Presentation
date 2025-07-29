const detailsDiv = document.getElementById('details');

  const part1Content = `
    <h3>Internship Part 1</h3>
    <p>This part involved working on XYZ project, where I learned A, B, and C.</p>
  `;

  const part2Content = `
    <h3>Internship Part 2</h3>
    <p>This part focused on ABC tasks, including D, E, and F skills.</p>
  `;

  function showDetails(part) {
    detailsDiv.style.display = 'block';
    if (part === 1) {
      detailsDiv.innerHTML = part1Content;
    } else if (part === 2) {
      detailsDiv.innerHTML = part2Content;
    }
  }