const TypeChart = [
    {
        "name": "normal",
        "visible": true,
        "immunes": [
            "ghost"
        ],
        "weaknesses": [
            "rock",
            "steel"
        ],
        "strengths": []
    },
    {
        "name": "fire",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "water",
            "rock",
            "dragon"
        ],
        "strengths": [
            "grass",
            "ice",
            "bug",
            "steel"
        ]
    },
    {
        "name": "water",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "water",
            "grass",
            "dragon"
        ],
        "strengths": [
            "fire",
            "ground",
            "rock"
        ]
    },
    {
        "name": "electric",
        "visible": true,
        "immunes": [
            "ground"
        ],
        "weaknesses": [
            "electric",
            "grass",
            "dragon"
        ],
        "strengths": [
            "water",
            "flying"
        ]
    },
    {
        "name": "grass",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "grass",
            "poison",
            "flying",
            "bug",
            "dragon",
            "steel"
        ],
        "strengths": [
            "water",
            "ground",
            "rock"
        ]
    },
    {
        "name": "ice",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "water",
            "ice",
            "steel"
        ],
        "strengths": [
            "grass",
            "ground",
            "flying",
            "dragon"
        ]
    },
    {
        "name": "fighting",
        "visible": true,
        "immunes": [
            "ghost"
        ],
        "weaknesses": [
            "poison",
            "flying",
            "psychic",
            "bug",
            "fairy"
        ],
        "strengths": [
            "normal",
            "ice",
            "rock",
            "dark",
            "steel"
        ]
    },
    {
        "name": "poison",
        "visible": true,
        "immunes": [
            "steel"
        ],
        "weaknesses": [
            "poison",
            "ground",
            "rock",
            "ghost"
        ],
        "strengths": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "ground",
        "visible": true,
        "immunes": [
            "flying"
        ],
        "weaknesses": [
            "grass",
            "bug"
        ],
        "strengths": [
            "fire",
            "electric",
            "poison",
            "rock",
            "steel"
        ]
    },
    {
        "name": "flying",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "electric",
            "rock",
            "steel"
        ],
        "strengths": [
            "grass",
            "fighting",
            "bug"
        ]
    },
    {
        "name": "psychic",
        "visible": true,
        "immunes": [
            "dark"
        ],
        "weaknesses": [
            "psychic",
            "steel"
        ],
        "strengths": [
            "fighting",
            "poison"
        ]
    },
    {
        "name": "bug",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "fighting",
            "poison",
            "flying",
            "ghost",
            "steel",
            "fairy"
        ],
        "strengths": [
            "grass",
            "psychic",
            "dark"
        ]
    },
    {
        "name": "rock",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fighting",
            "ground",
            "steel"
        ],
        "strengths": [
            "fire",
            "ice",
            "flying",
            "bug"
        ]
    },
    {
        "name": "ghost",
        "visible": true,
        "immunes": [
            "normal"
        ],
        "weaknesses": [
            "dark"
        ],
        "strengths": [
            "psychic",
            "ghost"
        ]
    },
    {
        "name": "dragon",
        "visible": true,
        "immunes": [
            "fairy"
        ],
        "weaknesses": [
            "steel"
        ],
        "strengths": [
            "dragon"
        ]
    },
    {
        "name": "dark",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fighting",
            "dark",
            "fairy"
        ],
        "strengths": [
            "psychic",
            "ghost"
        ]
    },
    {
        "name": "steel",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "water",
            "electric",
            "steel"
        ],
        "strengths": [
            "ice",
            "rock",
            "fairy"
        ]
    },
    {
        "name": "fairy",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "poison",
            "steel"
        ],
        "strengths": [
            "fighting",
            "dragon",
            "dark"
        ]
    }
]

export default TypeChart