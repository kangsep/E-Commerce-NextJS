    import ProductCarousel from "@/components/product/ProductCarousel";
    import { flashSaleProducts } from "@/data/products";
    import SectionTitle from "@/components/ui/SectionTitle";

    export default function FlashSale() {
    return (
        <section className="py-10">
            {/* Header */}
        <SectionTitle subtitle="Today" title="Flash Sales" />

            {/* Product grid */}
            <ProductCarousel products={flashSaleProducts} />
        </section>
    );
    }