<template>
  <div>
    <div class="col-lg-12 col-md-4 col-sm-4 col-xs-12">
      <div class="row mt-5">
        <div class="col">
          <div class="jumbotron mt-2 col-xs-12 col-sm-6 col-md-4 col-lg-12">
            <h1 class="display-2">{{ $t("Learn Geometry") }}</h1>
            <p class="lead">
              {{ $t("Lorem ipsum dolor sit amet.") }}
            </p>
            <a class="btn btn-lg btn-primary" href="#" role="button"
              >{{ $t("Get Started") }} &raquo;</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <!-- wider column -->
        <div class="col-md-8 mb-4">
          <p>
            {{
              $t(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            }}
          </p>
          <h2 class="display-3">{{ $t("Pythagoras Theorem") }}</h2>
          <p>
            {{ $t("Lorem ipsum dolor sit amet.") }},
            {{ $t("Lorem ipsum dolor sit amet.") }},
            {{ $t("Lorem ipsum dolor sit amet.") }},
            {{ $t("Lorem ipsum dolor sit amet.") }},
            {{ $t("Lorem ipsum dolor sit amet.") }}
          </p>
          <!-- nested columns -->
          <div class="row">
            <div class="col-md">
              <h3 class="display-4">{{ $t("Title") }}</h3>
              <p>
                {{
                  $t(
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  )
                }}
              </p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
            <div class="col-md">
              <h3 class="display-4">{{ $t("Title") }}</h3>
              <p>
                {{
                  $t(
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  )
                }}.
              </p>
              <a href="#" class="btn btn-primary">{{ $t("Button") }}</a>
            </div>
            <div class="col-md">
              <h3 class="display-4">{{ $t("Title") }}</h3>
              <p>
                {{
                  $t(
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  )
                }}
              </p>
              <a href="#" class="btn btn-primary">{{ $t("Button") }}</a>
            </div>
          </div>
          <!-- narrower column with sidebar links -->
        </div>
        <div class="col-md-4 mb-4">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">-</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">-</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">-</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">-</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
