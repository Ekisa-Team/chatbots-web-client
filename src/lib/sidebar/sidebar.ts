import {
	Apps,
	BookRead,
	Chat1,
	ChatForward,
	FlowChart,
	Lifebuoy,
	Robot,
	Server,
	TerminalBox
} from '@steeze-ui/remix-icons';

export type SidebarItem = {
	path: string;
	name: string;
	icon: any;
	iconTheme: 'default' | 'solid';
};

export const sidebarItems: SidebarItem[][] = [
	[
		{
			path: 'messaging-providers',
			name: 'Messaging providers',
			icon: Server,
			iconTheme: 'default'
		},
		{
			path: 'applications',
			name: 'Applications',
			icon: Apps,
			iconTheme: 'default'
		},
		{ path: 'chatbots', name: 'Chatbots', icon: Robot, iconTheme: 'default' },
		{ path: 'messages', name: 'Messages', icon: Chat1, iconTheme: 'default' },
		{ path: 'templates', name: 'Templates', icon: ChatForward, iconTheme: 'default' },
		{ path: 'channels', name: 'Channels', icon: FlowChart, iconTheme: 'default' },
		{ path: 'webhooks', name: 'Webhooks', icon: TerminalBox, iconTheme: 'solid' }
	],
	[
		{
			path: 'documentation',
			name: 'Documentation',
			icon: BookRead,
			iconTheme: 'default'
		},
		{
			path: 'help',
			name: 'Help',
			icon: Lifebuoy,
			iconTheme: 'default'
		}
	]
];
