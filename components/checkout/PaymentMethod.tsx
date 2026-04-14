export default function PaymentMethod() {
  return (
    <div className="space-y-3">
      
      <label className="flex items-center gap-2">
        <input type="radio" name="payment" />
        Bank
      </label>

      <label className="flex items-center gap-2">
        <input type="radio" name="payment" defaultChecked />
        Cash on delivery
      </label>

    </div>
  );
}