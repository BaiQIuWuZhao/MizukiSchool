// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "astro",
		name: "Astro",
		description:
			"一款现代化的静态网站生成器，支持多种框架集成，并具有出色的性能。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 0 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"一款基于 Chrome V8 引擎的 JavaScript 运行环境，用于服务器端开发。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 9, months: 0 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"一种通用的编程语言，适用于网页开发、数据分析、机器学习等领域。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 1 },
		color: "#3776AB",
	},

	// Database Skills

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"一种分布式版本控制系统，是进行代码管理及团队协作所必需的工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"一款轻便但功能强大的代码编辑器，拥有丰富的插件生态系统。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#007ACC",
	},

	// Other Skills

];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
