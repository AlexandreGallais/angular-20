import type { Meta, StoryObj } from '@storybook/angular';
import { SharedComponent } from './shared.component';
import { expect } from 'storybook/test';

const meta: Meta<SharedComponent> = {
  component: SharedComponent,
  title: 'SharedComponent',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SharedComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/shared works!/gi)).toBeTruthy();
  },
};
