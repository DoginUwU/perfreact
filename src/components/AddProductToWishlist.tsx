export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishlist,
  onClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Continue?
      <button onClick={onAddToWishlist}>Yes</button>
      <button onClick={onClose}>No</button>
    </span>
  );
}
