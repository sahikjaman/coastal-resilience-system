export function processSlrData(rawData) {
  return rawData.map((item) => ({
    ...item,
    totalThreat: item.slr2100 + (item.subsidence || 0),
  }));
}

export function calculateVulnerabilityIndex(data) {
  const factors = {
    density: data.density || 0,
    proximity: data.proximityToSettlement || 100,
    humanActivity: data.humanActivity || 0,
  };

  return (
    factors.density * 0.4 +
    ((100 - factors.proximity) / 100) * 0.3 +
    factors.humanActivity * 0.3
  ).toFixed(2);
}

export function aggregateMetrics(dataArray) {
  return {
    average: (dataArray.reduce((a, b) => a + b, 0) / dataArray.length).toFixed(
      2
    ),
    max: Math.max(...dataArray).toFixed(2),
    min: Math.min(...dataArray).toFixed(2),
  };
}
