// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "Sony Xperia 1 II(docomo)",
			image: "/images/device/Sony Xperia 1 II.webp",
			specs: "Black / 6G + 128GB",
			description:
				"始于颜值，忠于才华。",
			link: "https://baike.baidu.com/item/索尼Xperia%201%20II/49897171",
		},
	],
	笔记本: [
		{
			name: "华为MateBook D15 R5版",
			image: "/images/device/HUAWEI Matebook D15.webp",
			specs: "5G / 2.38GHz",
			description:
				"一款轻型办公本，不适合游戏",
			link: "https://www.vmall.com/product/10086440610959.html",
		},
	],
};
