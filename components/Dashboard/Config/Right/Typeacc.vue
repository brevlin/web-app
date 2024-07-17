<script lang="ts">

</script>

<template>
    <div class="current" data-kt-stepper-element="content">
        <div class="w-100">
            <div class="pb-10 pb-lg-15">
                <h2 class="fw-bold d-flex align-items-center text-gray-900">
                    Type de compte
                    <span class="ms-1" data-bs-toggle="tooltip" title="Billing is issued based on your selected account typ">
                        <i class="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                        </i>
                    </span>
                </h2>
                <div class="text-muted fw-semibold fs-6">If you need more info, please check out 
                <a href="#" class="link-primary fw-bold">Help Page</a>.</div>
            </div>
            <div class="fv-row">
                <div class="row">
                    <DashboardConfigRightCardacc
                        type="Etablissement scolaire"
                        description="Pour les établissements scolaires"
                        icon="/svg/school.svg"
                    />
                </div>
            </div>
        </div>
    </div>
</template>