    import ProductCarousel from "@/components/product/ProductCarousel";
    import { products } from "@/data/products";
    import SectionTitle from "@/components/ui/SectionTitle";

    export default function FlashSale() {
    return (
        <section className="py-10">
        <SectionTitle subtitle="Today" title="Flash Sales" />

        <ProductCarousel products={products} />
        </section>
    );
    }