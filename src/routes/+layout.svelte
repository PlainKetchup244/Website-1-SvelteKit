<script>
    import "$lib/Style.css"
	import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<dif class="Wrapper">

    <Header />
    
    <main>
        <slot></slot>
    </main>
    <Footer />
</dif>

<style>
    .Wrapper {
        min-height: 100dvh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>