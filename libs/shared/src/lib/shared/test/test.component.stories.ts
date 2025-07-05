import type { Meta, StoryObj } from '@storybook/angular';
import { TestComponent } from './test.component';
import { expect } from 'storybook/test';

const meta: Meta<TestComponent> = {
  component: TestComponent,
  title: 'TestComponent',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<TestComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/test works!/gi)).toBeTruthy();
  },
};
