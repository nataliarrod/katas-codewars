const crap = (x, bags, cap) => {
  const totalCapacity = bags * cap
  const garden = x.join('')

  if (garden.includes('D')) return 'Dog!!'
  const poopRegex = /@/g;
  const poopQuantity = (garden.match(poopRegex) || []).length
  const result = poopQuantity <= totalCapacity ? 'Clean' : 'Cr@p';
  return result;
}