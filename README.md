# 🌊 CoastGuard Indonesia - Coastal Resilience Monitoring System

[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Integrated geospatial platform for monitoring coastal resilience across Java-Bali using satellite remote sensing and GIS analysis.

## 🚀 Features

- **🌊 Sea Level Rise Monitoring** - DEM analysis & climate projections (2030-2100)
- **🏖️ Shoreline Change Detection** - DSAS-based erosion/accretion tracking
- **♻️ Plastic Waste Mapping** - Hyperspectral & SAR debris detection
- **🌳 Mangrove Health Assessment** - Vegetation indices & field validation

## 📊 Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Maps**: Leaflet.js, React-Leaflet
- **Charts**: Recharts
- **Data**: Sentinel-2, Landsat 8-9, SRTM DEM
- **Deployment**: Vercel (Zero Config)

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/yourusername/coastal-resilience.git
cd coastal-resilience

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
coastal-resilience-system/
├── public/
│   ├── data/           # JSON datasets
│   └── index.html
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── utils/          # Helper functions
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🌍 Data Sources

- **Sentinel-2 MSI** (ESA) - 10-20m resolution
- **Landsat 8-9** (NASA/USGS) - 15-30m resolution
- **SRTM DEM** (NASA) - 30m elevation
- **BMKG** - Tide gauge data

## 📖 Citation

If you use this platform, please cite:

```bibtex
@software{coastguard2025,
  title={CoastGuard Indonesia: Coastal Resilience Monitoring System},
  author={Your Team Name},
  year={2025},
  url={https://github.com/yourusername/coastal-resilience}
}
```

## 📄 License

MIT License - See [LICENSE](LICENSE) file

## 👥 Team

- Your Name - Project Lead
- Team Member 2 - Data Scientist
- Team Member 3 - Marine Ecologist
- Team Member 4 - Web Developer

## 🏆 ASEAN Coastal Resilience Challenge 2025

---

Made with ❤️ for coastal protection
