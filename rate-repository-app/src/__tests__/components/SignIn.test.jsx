import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const authUser = jest.fn();
      
      render(<SignInContainer authUser={authUser} />);
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'matti');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign in'));
  
      await waitFor(() => {
        expect(authUser).toHaveBeenCalledTimes(1);
        expect(authUser.mock.calls[0][0]).toEqual({
          username: 'matti',
          password: 'password',
        });
      });
    });
  });
});