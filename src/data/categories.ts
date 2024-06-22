import { Watch, Camera, Headphones, Monitor, Gamepad, LucideIcon, Smartphone } from 'lucide-react';


export interface Category {
    name: string;
    Icon: LucideIcon;
}

export const browseByCategories : Category[] = [
    { name: "Phones", Icon: Smartphone },
    { name: "Smart Watches", Icon: Watch },
    { name: "Cameras", Icon: Camera },
    { name: "Headphones", Icon: Headphones },
    { name: "Computers", Icon: Monitor },
    { name: "Gaming", Icon: Gamepad },
];

