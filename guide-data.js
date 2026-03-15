// ===== Plant Care Guide Data =====
// This file contains detailed care instructions for each plant at different growth stages

const GUIDE_DATA = {
    "1": { // Tomato
        "name": "Tomato",
        "overview": "Tomatoes are warm-season vegetables that require full sunlight and consistent watering. They are one of the most rewarding plants for beginners to grow.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or light potting soil. Keep moist but not waterlogged. Ensure good drainage.",
                "water": "Keep soil consistently moist. Water gently to avoid disturbing seeds. Mist lightly if needed.",
                "sunlight": "Provide 12-16 hours of indirect light per day. Use grow lights if starting indoors.",
                "environment": "Keep in a warm, humid environment. Ideal for seed germination trays with a humidity dome.",
                "temperature": "Maintain 70-80°F (21-27°C) for optimal germination. Nighttime can be slightly cooler.",
                "pest": "Monitor for fungal issues in humid environments. Ensure good air circulation."
            },
            "seedling": {
                "soil": "Transfer to potting soil when 2-3 leaves appear. Ensure well-draining mix.",
                "water": "Water when top inch of soil feels dry. Avoid water on leaves.",
                "sunlight": "Provide 14-16 hours of bright light daily. Gradually acclimatize to outdoor conditions.",
                "environment": "Keep away from drafts. Provide adequate spacing between seedlings for air circulation.",
                "temperature": "Maintain 65-75°F (18-24°C). Can tolerate slightly cooler nights.",
                "pest": "Check for damping-off disease. Ensure good drainage and air circulation."
            },
            "tree": {
                "soil": "Plant in nutrient-rich garden soil or large container with compost mixed in.",
                "water": "Water deeply 1-2 times per week. Provide 1-2 inches of water per week. Consistent moisture is key.",
                "sunlight": "Requires 6-8 hours of direct sunlight daily for best fruit production.",
                "environment": "Plant in warm location after last frost. Support with stakes or cages.",
                "temperature": "Thrives in 70-85°F (21-29°C). Dies in frost. Plant only after all danger of frost has passed.",
                "pest": "Watch for aphids, hornworms, and spider mites. Use natural pesticides if needed. Check leaves regularly."
            }
        }
    },
    "2": { // Basil
        "name": "Basil",
        "overview": "Basil is a fragrant herb that's perfect for beginners. It grows quickly and is great for cooking. Pinch off flower buds to encourage leaf growth.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or light potting soil. Basil seeds are small, so keep them moist.",
                "water": "Keep soil consistently moist. Mist regularly but don't overwater.",
                "sunlight": "Provide 6-8 hours of light daily. Can tolerate indirect light initially.",
                "environment": "Warm, humid conditions are ideal. Temperature is important for basil germination.",
                "temperature": "Requires 70-75°F (21-24°C) for germination. Higher temperatures speed up sprouting.",
                "pest": "Generally disease-free at this stage. Monitor soil moisture."
            },
            "seedling": {
                "soil": "Thin seedlings to 4-6 inches apart. Use well-draining potting soil.",
                "water": "Water when soil surface feels dry. Don't let soil dry out completely.",
                "sunlight": "Provide 12-14 hours of light daily. Can start moving to brighter locations.",
                "environment": "Keep warm and protected from cold drafts.",
                "temperature": "Maintain 65-75°F (18-24°C). Basil is sensitive to cold.",
                "pest": "Few pests at this stage. Watch for fungal issues in humid conditions."
            },
            "tree": {
                "soil": "Plant in well-draining soil. Basil doesn't like soggy conditions.",
                "water": "Water when top inch of soil is dry. Prefer slightly moist conditions but don't overwater.",
                "sunlight": "Needs 6-8 hours of direct sunlight daily. More sun = more flavorful leaves.",
                "environment": "Warm, protected location. Can be grown indoors or outdoors in warm season.",
                "temperature": "Prefers 70-85°F (21-29°C). Cold below 50°F may slow growth.",
                "pest": "Watch for spider mites in hot, dry conditions. Pinch off flowers to promote leaf growth."
            }
        }
    },
    "3": { // Lettuce
        "name": "Lettuce",
        "overview": "Lettuce is a cool-season crop that's excellent for beginners. It grows quickly and can be harvested multiple times.",
        "stages": {
            "seed": {
                "soil": "Use light seed-starting mix or potting soil. Keep moist but not waterlogged.",
                "water": "Keep soil moist. Lettuce seeds need moisture to germinate.",
                "sunlight": "Can tolerate lower light initially. 4-6 hours daily is sufficient for germination.",
                "environment": "Cool, moist environment is ideal. Avoid heat.",
                "temperature": "Lettuce prefers cool temperatures: 60-70°F (15-21°C). Can tolerate cooler conditions.",
                "pest": "Generally pest-free as a seed. Monitor soil moisture."
            },
            "seedling": {
                "soil": "Thin to 4-6 inches apart. Use well-draining potting soil.",
                "water": "Keep consistently moist. Don't allow soil to dry out.",
                "sunlight": "Provide 12-14 hours of light daily. Lettuce doesn't require intense sunlight.",
                "environment": "Cool, well-ventilated space. Protect from extreme heat.",
                "temperature": "Keep between 60-65°F (15-18°C) for optimal growth. Can bolt if too warm.",
                "pest": "Watch for slugs and snails. Ensure good air circulation to prevent fungal issues."
            },
            "tree": {
                "soil": "Plant in nutrient-rich, well-draining soil. Add extra compost.",
                "water": "Keep soil consistently moist. Provide 1-1.5 inches of water per week.",
                "sunlight": "Needs 4-6 hours of sunlight daily. Afternoon shade in hot climates prevents bolting.",
                "environment": "Cool-season crop. Plant in spring or fall in warm climates.",
                "temperature": "Best growth at 55-65°F (13-18°C). Will bolt (go to seed) if temperatures exceed 75°F (24°C).",
                "pest": "Monitor for slugs, snails, and aphids. Use row covers to protect. Keep area clean."
            }
        }
    },
    "10": { // Cucumber
        "name": "Cucumber",
        "overview": "Cucumbers are warm-season vegetables that grow quickly on vines. They prefer warm conditions and consistent watering.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix. Keep moist until germination.",
                "water": "Keep soil consistently moist but not waterlogged.",
                "sunlight": "Provide 10-12 hours of indirect light. Warmth is more important than light.",
                "environment": "Warm, humid environment aids germination.",
                "temperature": "Requires 70-85°F (21-29°C) for germination. Higher temperatures speed up process.",
                "pest": "Monitor for mold if too humid. Ensure adequate air circulation."
            },
            "seedling": {
                "soil": "Transfer to potting soil when true leaves appear. Space 6-12 inches apart.",
                "water": "Water when surface feels dry. Keep consistently moist.",
                "sunlight": "Provide 14-16 hours of light daily. More light = stronger plants.",
                "environment": "Warm, well-ventilated space. Avoid cold drafts.",
                "temperature": "Maintain 70-75°F (21-24°C) for best growth.",
                "pest": "Watch for spider mites and whiteflies. Ensure good air circulation."
            },
            "tree": {
                "soil": "Plant in nutrient-rich soil with plenty of compost. Needs well-draining conditions.",
                "water": "Water deeply and regularly. Provide 1-2 inches of water per week. Moisture is crucial for fruit quality.",
                "sunlight": "Requires 6-8 hours of direct sunlight daily for fruit production.",
                "environment": "Plant on trellises or stakes to save space. Ensure proper support for vines.",
                "temperature": "Thrives in 70-85°F (21-29°C). Sensitive to cold below 60°F (15°C).",
                "pest": "Watch for powdery mildew, beetles, and aphids. Ensure good air circulation between plants."
            }
        }
    }
};

// Tips for each plant (general)
const PLANT_TIPS = {
    "1": { // Tomato tips
        "general": [
            "💡 Tip: Prune suckers (shoots between main stem and branches) for better fruit production.",
            "💡 Tip: Once flowering starts, reduce nitrogen fertilizer to encourage fruiting.",
            "💡 Tip: Harvest when fruits are fully colored but still slightly firm.",
            "💡 Tip: Determinate varieties are more compact; indeterminate varieties grow tall and need support."
        ]
    },
    "2": { // Basil tips
        "general": [
            "💡 Tip: Pinch off flower buds as soon as they appear to keep the plant producing leaves.",
            "💡 Tip: Harvest from the top and it will branch out more.",
            "💡 Tip: Basil loves warmth - it's sensitive to cold temperatures.",
            "💡 Tip: Best flavor when picked in the morning after the dew dries."
        ]
    },
    "3": { // Lettuce tips
        "general": [
            "💡 Tip: Harvest outer leaves while the plant is small for continuous harvest.",
            "💡 Tip: Lettuce is a cool-season crop - plant in spring or fall.",
            "💡 Tip: Cut-and-come-again varieties allow multiple harvests from one plant.",
            "💡 Tip: Provide afternoon shade in hot climates to prevent bolting."
        ]
    },
    "10": { // Cucumber tips
        "general": [
            "💡 Tip: Consistent watering prevents bitter cucumbers.",
            "💡 Tip: Harvest cucumbers regularly to encourage more fruit production.",
            "💡 Tip: Use trellises to save space and improve air circulation.",
            "💡 Tip: Pollination is important - ensure bees or other pollinators can access flowers."
        ]
    }
};
