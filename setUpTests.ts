import 'jest-dom/extend-expect'; // eslint-disable-line
// @ts-ignore
import { toBeInTheDocument, toHaveClass } from 'jest-dom'; // eslint-disable-line

expect.extend({ toBeInTheDocument, toHaveClass });
