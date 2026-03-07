// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "YIMC",
		imgurl: "https://www.tianyimc.com/resources/blog_logo.png",
		desc: "MCE的腐竹，群友的rbq，性奴，朋友，全球可飞",
		siteurl: "https://blog.tianyimc.com/about",
		tags: ["腐竹","MCE Server","tianyimc2333"],
	},
    {
		id: 2,
		title: "qingfong1234",
		imgurl: "/images/friends/qingfong1234.webp",
		desc: "MCE的运维，应该是个0",
		siteurl: "https://space.bilibili.com/489817787",
		tags: ["运维","MCE Server","qingfong1234"],
	},
	{
		id: 3,
		title: "jsishsjsj",
		imgurl: "/images/friends/jsishsjsj.webp",
		desc: "MCE服务器小男娘，没有之一",
		siteurl: "https://xiao.nanniang.de/links",
		tags: ["小男娘","MCE Server","jsishsjsj"],
	},
	{
		id: 4,
		title: "hansiqi2008",
		imgurl: "/images/friends/hansiqi2008.webp",
		desc: "总之，AE1O❤Hansiqi2008!",
		siteurl:'tencent://ntqq-open?subCmd=profile&action=openMiniBuddyProfile&actionParams={"uin":"2637236284","sourceType":"QrCodeShareBuddyLink"}',
		tags: ["小男娘（伪）","MCE Server","hansiqi2008"],
	},
	{
		id: 5,
		title: "江SloppySteak2845",
		imgurl: "/images/friends/SloppySteak.webp",
		desc: "集卡爱好者、kanade之友",
		siteurl: "https://space.bilibili.com/1154124384",
		tags: ["冰块","MCE Server","江（MCE内刊）（mnm组织）SloppySteak2845"],
	},
	{
		id: 6,
		title: "yukinaiai1026",
		imgurl: "/images/friends/yukinaiai1026.webp",
		desc: "原kanade02109155",
		siteurl:'tencent://ntqq-open?subCmd=profile&action=openMiniBuddyProfile&actionParams={"uin":"1565323813","sourceType":"QrCodeShareBuddyLink"}',
		tags: ["MCE Server","kanade02109155"],
	},
	{
		id: 7,
		title: "WarSkyGod",
		imgurl: "/images/friends/WarSkyGod.webp",
		desc: "辛勤修补服务器的群管、天译：白工",
		siteurl: "https://space.bilibili.com/85304627",
		tags: ["MCE Server","【NPE】WarSkyGod"],
	},
	{
		id: 8,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "Where the world builds software",
		siteurl: "https://github.com",
		tags: ["Development", "Platform"],
	}
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
